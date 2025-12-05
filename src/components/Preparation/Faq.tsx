"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const items = [
  {
    question: "How do I get my Discord data?",
    answer: (
      <>
        Visit{" "}
        <a href="https://discord.com/settings/account" target="_blank" rel="noopener noreferrer" className="underline font-bold text-cyan-400 hover:text-cyan-300">
            Discord's Data Download Page
        </a> and request your data in 'JSON - Machine-readable file' format. After requesting, wait for Discord to prepare the file. Once ready, download it from the 'Download data' section and upload it to Discord Wrapped.
      </>
    ),
  }
  ,
  {
    question: "What File Type is Needed for Discord Wrapped?",
    answer: (
      <>
        Use the 'Discord_Data_....zip' file from your Discord data export for Discord Wrapped. Wrapped will automatically process the ZIP file to retrieve the 'user_data.json' file. Alternatively, you can manually extract the ZIP and upload the 'user_data.json' file.
      </>
    ),
  }
  ,
  {
    question: "Is Discord Wrapped Safe and Legitimate?",
    answer: (
      <>
        Yes, Discord Wrapped prioritizes safety and privacy. You can review its entire source code on GitHub at{" "}
        <a
          href="https://github.com/vantezzen/wrapped"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="underline font-bold text-cyan-400 hover:text-cyan-300"
        >
          this link
        </a>. 
        Your data remains on your browser and is never uploaded to any servers, ensuring no data storage or processing on our end.
      </>
    ),
  }
  ,
  {
    question: "What's the Purpose of This Website?",
    answer: (
      <>
        Discord Wrapped, inspired by Spotify Wrapped, is a personal project designed to create a summary of your Discord activity from your data export. It's a non-commercial, fun venture I enjoy developing in my spare time, offering an entertaining way to view your Discord usage.
      </>
    ),
  }
  ,
  {
    question: "Can you get access to my Discord account with my data?",
    answer: (
      <>
        The short answer is <strong>no</strong>. Your Discord data export only
        contains data about your account, not your login credentials!
        <br />
        You can <strong>verify this yourself</strong> by opening your Discord
        data export and looking at the file "user_data.json" in a text editor.
        You can try searching for your Discord password in the file and you'll
        see that it's not there.
        <br />
        In general, Discord doesn't store your unencrypted password anywhere and
        only stores a hashed version of it. Due to this, it's impossible for the
        Discord data export to contain your password.
        <br />
        Discord Wrapped will never ask you for your Discord login credentials
        and doesn't require you to enter them anywhere.
        <br />
        <br />
        Depending on your Discord account data, your data export may contain your
        email address or phone number. This data is{" "}
        <strong>not used or transferred</strong> by Discord Wrapped!
        <br />
        However, if you are concerned about this, you can open your export data
        in a text editor, search for your email address or phone number and
        delete it from the file before uploading it to Discord Wrapped.
      </>
    ),
  },
  {
    question: "Does Discord Wrapped Show My Complete Discord History?",
    answer: (
      <>
        Not entirely. Discord's data export includes only the last 6-12 months of message history, based on your usage. You'll see a specific cutoff date in your Wrapped, like "Since 01/01/2022 you've sent...". However, server memberships and activity are usually complete, so your Wrapped will display your full history of activity.
      </>
    ),
  }
  ,
  {
    question: "How Long Does It Take to Receive My Discord Data?",
    answer: (
      <>
        The time Discord takes to prepare your data export varies, **ranging from a few minutes to several days**, depending on your Discord usage. Unfortunately, **Discord Wrapped cannot speed up this process** as it relies on Discord's data preparation timeline.
      </>
    ),
  }
  ,
  {
    question: "What Is Considered a 'Chat Session' on Discord Wrapped?",
    answer: (
      <>
        A 'chat session' on Discord Wrapped is defined as a period of continuously using Discord without a break exceeding 5 minutes. **If there's a break longer than 5 minutes, it's counted as a new session**. For instance, chatting for 10 minutes, pausing for 10 minutes, and then chatting again for another 10 minutes constitutes two separate chat sessions.
      </>
    ),
  }
  ,
  {
    question: "How Is a 'Message' Defined on Discord?",
    answer: (
      <>
        A 'message' on Discord is counted when you send or receive a message in any server or direct message. This method is consistent with how Discord tracks items in your message history.
      </>
    ),
  }
  ,
  {
    question: "How does Discord Wrapped work?",
    answer: (
      <>
        Discord Wrapped uses your Discord data export to calculate your
        Wrapped. This means that all statistics are generated locally in your
        browser and your data is never uploaded to any server.
      </>
    ),
  },
  {
    question: "How does the Spotify integration work?",
    answer: (
      <>
        If you want to, Discord Wrapped can play fitting songs in the
        background while you're looking at your Wrapped - similar to how Spotify
        Wrapped works.
        <br />
        To achieve this, Discord Wrapped uses{" "}
        <a
          href="https://developer.spotify.com/documentation/embeds"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold text-cyan-400 hover:text-cyan-300"
        >
          Spotify Embeds
        </a>{" "}
        to embed a Spotify player to the bottom right of the screen.
        <br />
        For this to work, you'll only need to be logged into Spotify in your
        browser - you don't need to connect your Spotify account to Discord
        Wrapped! Because Spotify is embedded using Spotify's build-in support for
        websites to do so, we don't have access to your Spotify account in any
        way.
      </>
    ),
  },
];

function Faq() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-lg dark mx-auto text-left"
    >
      {items.map((item) => (
        <AccordionItem value={item.question} key={item.question}>
          <AccordionTrigger className="text-left" >
            {item.question}
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default Faq;
