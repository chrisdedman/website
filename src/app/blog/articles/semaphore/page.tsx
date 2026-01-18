"use client"

import React from "react";
import Link from 'next/link';
import { CodeBlock,dracula } from "react-code-blocks"; 
import Menu from '@/components/navigation'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="h-screen p-8 lg:p-16 mt-16 ">
      <Menu />
      <div className="p-6 border border-gray-200 rounded-lg shadow">
        <div className="p-1">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">&lt;semaphore.h&gt; Library</h5>
          <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
          <div>
            <address>By <Link rel="author" href="/">Chris Dedman-Rollet</Link></address>
            on <time dateTime="01-14-2024" title="Jan 14th, 2024">01-14-2024</time>
          </div>
          <p>
            I learned about the <b>&lt;semaphore.h&gt; library</b>. 
            A semaphore is similar to a mutex with a few differences. It does not 
            have the inherent concept of ownership, like a mutex, but is used to 
            control access to a pool of resources rather than a single resource. 
            Semaphores are useful if you need multiple threads to acquire and release 
            semaphores concurrently, up to a specified count. A semaphore is typically 
            used to control access to a pool of resources. Threads can acquire a 
            semaphore using the sem_wait(&mutex) function, which decrements the semaphore value. 
            This function will wait until the semaphore value becomes greater than zero, 
            allowing the thread to proceed and perform its task. Once the task is completed, 
            the semaphore is incremented using the sem_post(&mutex) function to signal that 
            the resource is available for other threads.
          </p>

          <p>
            The <b>sem_init()</b> function is used to initialize a semaphore.
            <br></br>- The first argument is a pointer to a sem_t variable.
            <br></br>- The second argument is a flag that indicates whether the semaphore is shared between processes.
            <br></br>- The third argument is the initial value of the semaphore.
            <br></br>- The function returns 0 if the semaphore is successfully initialized, otherwise it returns an error code.
          </p>

          <p>
            The <b>sem_wait()</b> function is used to acquire a semaphore.
            <br></br>- The first argument is a pointer to a sem_t variable.
            <br></br>- The function returns 0 if the semaphore is successfully acquired, otherwise it returns an error code.
          </p>

          <p>
            The <b>sem_post()</b> function is used to release a semaphore.
            <br></br>- The first argument is a pointer to a sem_t variable.
            <br></br>- The function returns 0 if the semaphore is successfully released, otherwise it returns an error code.  
          </p>

          <p>
            Here is a simple implementation of the semaphore library:
          </p>
          <CodeBlock 
            text={`#include <semaphore.h>

sem_t mutex;

void *althernateBlink(void *value)
{
  while (true)
  {
    sem_wait(&mutex);
    // do something once the semaphore is greater than 0
  }
  return NULL;
}

void *lightShowLED(void *value)
{
  while (true)
  {
    // do something

    sem_post(&mutex);
  }
  return NULL;
}

int main()
{
  pthread_t thread[4];

  sem_init(&mutex, 0, 0);

  pthread_create(&thread[0], NULL, &lightShowLED, NULL);
  pthread_create(&thread[1], NULL, &althernateBlink, NULL);

  return 0;
}
`}
            language='cpp'
            showLineNumbers={false}
            theme={dracula} 
          /> 

          <p>
            Here is the documentation for the <a href="https://pubs.opengroup.org/onlinepubs/7908799/xsh/semaphore.h.html" target="_blank" rel="noreferrer noopener" className="underline">semaphore.h library</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
