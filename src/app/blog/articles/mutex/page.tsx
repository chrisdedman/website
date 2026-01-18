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
          <h5 className="mb-2 text-2xl font-bold tracking-tight">Mutual Exclusion (Mutex)</h5>
          <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
          <div>
            <address>By <Link rel="author" href="/">Chris Dedman-Rollet</Link></address>
            on <time dateTime="01-11-2024" title="Jan 11th, 2024">01-11-2024</time>
          </div>
          <p>
            I learned about Mutual Exclusion (Mutex) from the <b>&lt;pthread.h&gt; library</b>. 
            A mutex is a concurrency control mechanism that prevents multiple threads from accessing 
            the same shared resource simultaneously, thus avoiding race conditions. 
            The pthread library includes a function to &apos;lock&apos; a thread, which needs 
            to be initialized before accessing a thread. Then, the thread can acquire 
            the mutex before accessing the shared resource. If another thread tries 
            to acquire the mutex while the previous one still holds it, it will be 
            blocked until the previous thread releases the mutex. This ensures 
            that only one thread at a time can execute the part of the code that 
            accesses the shared resource. It is important to release the mutex when 
            the thread is done with its designated work; otherwise, the next thread will not be able to start.
          </p>
          <p>
            The <b>pthread_mutex_init()</b> function is used to initialize a mutex.
            <br></br>- The first argument is a pointer to a pthread_mutex_t variable.
            <br></br>- The second argument is a pointer to a pthread_mutexattr_t variable.
            <br></br>- The function returns 0 if the mutex is successfully initialized, otherwise it returns an error code.
          </p>

          <p>
            The <b>pthread_mutex_lock()</b> function is used to acquire a mutex.
            <br></br>- The first argument is a pointer to a pthread_mutex_t variable.
            <br></br>- The function returns 0 if the mutex is successfully acquired, otherwise it returns an error code.
          </p>

          <p>
            The <b>pthread_mutex_unlock()</b> function is used to release a mutex.
            <br></br>- The first argument is a pointer to a pthread_mutex_t variable.
            <br></br>- The function returns 0 if the mutex is successfully released, otherwise it returns an error code.
          </p>

          <p>
            Here is a simple implementation of the mutex from pthread library:
          </p>
          <CodeBlock 
            text={`#include <pthread.h>

static pthread_mutex_t lock = PTHREAD_MUTEX_INITIALIZER;

void *pushButtonThread(void *value)
{
  pthread_mutex_lock(&lock);
  // do something...
  pthread_mutex_unlock(&lock);
  return NULL;
}

int main()
{
  pthread_t button[2];

  pthread_mutex_init(&lock, NULL);

  // Create as many thread as you need
  pthread_create(&button[0], NULL, &pushButtonThread, NULL);
  pthread_create(&button[1], NULL, &pushButtonThread, NULL);

  pthread_mutex_destroy(&lock);
  return 0;
}`}
            language='cpp'
            showLineNumbers={false}
            theme={dracula} 
          /> 

          <p>
            Here is the documentation for the <a href="pubs.opengroup.org/onlinepubs/9699919799/functions/pthread_mutex_init.html" target="_blank" rel="noreferrer noopener" className="underline">pthread mutex.</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
