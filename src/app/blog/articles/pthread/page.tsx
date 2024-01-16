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
          <h5 className="mb-2 text-2xl font-bold tracking-tight">&lt;pthread.h&gt; Library</h5>
          <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
          <div>
            <address>By <a rel="author" href="/">Chris Dedman-Rollet</a></address>
            on <time dateTime="01-08-2024" title="Jan 08th, 2024">01-08-2024</time>
          </div>
          <p>
            I learned about the <b>&lt;pthread.h&gt; library</b>. 
            The purpose of this library is to create a function that will run independently of the main program. 
            This is achieved by creating a thread, which will terminate under various conditions, 
            including the execution of an exit function within the thread function or when the main function reaches the end of the program.
          </p>
          <p>
            The <b>pthread_create()</b> function is used to create a new thread. 
            <br></br>- The first argument is a pointer to a pthread_t variable, which will be used to identify the thread in subsequent calls. 
            <br></br>- The second argument is used to set the attributes of the thread. 
            <br></br>- The third argument is a pointer to the function that will be executed by the thread. 
            <br></br>- The fourth argument is a pointer to the argument that will be passed to the thread function. 
            <br></br>- The function returns 0 if the thread is successfully created, otherwise it returns an error code.
          </p>
          <p>
            The <b>pthread_join()</b> function is used to wait for a thread to terminate.
            <br></br>- The first argument is the thread to wait for.
            <br></br>- The second argument is a pointer to a pointer that will be used to return the value returned by the thread function.
            <br></br>- The function returns 0 if the thread is successfully joined, otherwise it returns an error code.
          </p>
          <p>
            Here is a simple implementation of the pthread library:
          </p>
          <CodeBlock 
            text={`#include <pthread.h>

void *myThread(void &value) {
  // do something

  return NULL;
}

int main() {
  pthread_t thread;

  pthread_create(&thread, NULL, &myThread, NULL);
  pthread_join(thread, NULL);

  return 0;
}`}
            language='cpp'
            showLineNumbers={false}
            theme={dracula} 
          /> 

          <p>
            Here is the documentation for the <a href="https://pubs.opengroup.org/onlinepubs/7908799/xsh/pthread.h.html" target="_blank" rel="noreferrer noopener" className="underline">pthread.h library</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}