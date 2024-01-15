"use client"

import React from "react";
import { CodeBlock,dracula } from "react-code-blocks"; 
import Menu from '@/components/navigation'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="h-screen p-8 lg:p-16 mt-16 ">
      <Menu />
      <div className="p-6 border border-gray-200 rounded-lg shadow">
        <div className="p-1">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">&lt;poll.h&gt; Library</h5>
          <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
          <div>
            <address>By <a rel="author" href="/">Chris Dedman-Rollet</a></address>
            on <time dateTime="01-10-2024" title="Jan 10th, 2024">01-10-2024</time>
          </div>
          <p>
            I learned about the <b>&lt;poll.h&gt; library</b>. 
            The purpose of this library is to function as an event listener. 
            The library includes a function that waits for a set of file descriptors 
            to become ready for I/O operations (input, output). 
            I used this library in parallel with a thread where I am monitoring a 
            GPIO pin for events triggered by pressing a push-button on my Raspberry Pi board.
             When the push-button is pressed and the voltage increases, the interrupt is 
             triggered and will activate or deactivate an LED based on a defined function that I have created.
          </p>

          <p> 
            The <b>pollfd</b> structure is used to store information about a file descriptor.
            <br></br>- The first argument is the file descriptor.
            <br></br>- The second argument is the events that the file descriptor is interested in.
            <br></br>- The third argument is the events that have occurred.
          </p>

          <p>
            The <b>poll()</b> function is used to wait for a set of file descriptors to become ready for I/O operations.
            <br></br>- The first argument is a pointer to an array of pollfd structures.
            <br></br>- The second argument is the number of elements in the array.
            <br></br>- The third argument is the timeout in milliseconds.
            <br></br>The <b>poll()</b> function returns the number of file descriptors that are ready for I/O operations, or -1 if an error occurs.
          </p>
          <p>
            Here is a simple implementation of the poll library:
          </p>
          <CodeBlock 
            text={`#include <poll.h>

int main() {
  struct pollfd fds[1];

  fds[0].fd = open("/sys/class/gpio/gpio6/value", O_RDWR);
  fds[0].events = POLLPRI;
  fds[0].revents = 0;

  int myPoll = poll(fds, 0, 5000);

  if (myPoll < 0) {
    // the poll couldn't start
  }
  else if (myPoll == 0) {
    // the poll timed out!
  }
  else {
    // do something
  }
  return 0;
}`}
            language='cpp'
            showLineNumbers={false}
            theme={dracula} 
          /> 

          <p>
            Here is the documentation for the <a href="https://pubs.opengroup.org/onlinepubs/7908799/xsh/poll.h.html" target="_blank" rel="noreferrer noopener" className="underline">poll.h library</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}