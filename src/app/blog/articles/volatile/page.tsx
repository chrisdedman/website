"use client"

import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="h-screen p-8 lg:p-16 mt-16 ">
      <Menu />
      <div className="p-6 border border-gray-200 rounded-lg shadow">
        <div className="p-1">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">Volatile Type Qualifier</h5>
          <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
          <div>
            <address>By <a rel="author" href="/">Chris Dedman-Rollet</a></address>
            on <time dateTime="02-01-2024" title="Feb 01th, 2024">02-01-2024</time>
          </div>
          <p>
            Today, I learned about the <strong>volatile</strong> keyword. This keyword is
            particularly useful when working with memory-mapped hardware devices.
            It indicates to the compiler that the value of a variable may change
            at any time, often due to factors external to the program&lsquo;s normal
            flow of control, such as the use of semaphores, mutexes or threads.
            By using the volatile keyword, you ensure that accesses to such variables
            are not optimized away by the compiler, as it recognizes that the
            variable&lsquo;s value could be altered asynchronously. This is crucial,
            especially when dealing with device registers or shared variables
            in concurrent programming scenarios.
          </p>

          <p>
            Some example where the volatile keyword should be used:
            <br></br>- To declare a global variable accessible (by current use or scope) by any interrupt service routine.
            <br></br>- To declare a global variable accessible (by current use or scope) by two or more threads.
            <br></br>- To declare a pointer to a memory-mapped I/O peripheral register set
            <br></br>- To declare a delay loop counter.
          </p>

          <p>
            Here is how we could declare a volatile semaphore in C based on my <a href="/blog/articles/semaphore" className="underline">previous article</a>:
          </p>
          <CodeBlock
            text={`volatile sem_t mutex;}`}
            language='c'
            showLineNumbers={false}
            theme={dracula}
          />

          <p>
            An interesting anecdote from the book <a href="https://barrgroup.com/sites/default/files/barr_c_coding_standard_2018.pdf" target="_blank" rel="noreferrer noopener" className="underline">“<strong>Embedded C Coding Standard</strong>“</a> where I first learned about volatile:
          </p>
          <figure className="bg-gray-200 text-black p-2 rounded-lg">
            <blockquote className="m-2">
              Anecdotal evidence suggests that programmers unfamiliar with the volatile
              keyword believe their compiler&lsquo;s optimization feature is more broken
              than helpful and disable optimization. We believe that the vast majority
              of embedded systems contain bugs waiting to happen due to missing volatile keywords.
              Such bugs typically manifest themselves as “glitches” or only after changes are made
              to a “proven” code base.
            </blockquote>
          </figure>

          <p>
            Here is an good example from the documentation (link bellow) to see how
            the volatile keyword can be used and how it affect optimization. Try it
            yourself and see how the time differs:
          </p>
          <CodeBlock
            text={`#include <stdio.h>
#include <time.h>
  
int main(void)
{
    clock_t t = clock();
    double d = 0.0;
    for (int n = 0; n < 10000; ++n)
    {
      for (int m = 0; m < 10000; ++m)
      {
        d += d * n * m; // reads from and writes to a non-volatile 
      }
    }
    printf("Modified a non-volatile variable 100m times. "
          "Time used: %.2f seconds",
          (double)(clock() - t)/CLOCKS_PER_SEC);
  
    t = clock();
    volatile double vd = 0.0;
    for (int n = 0; n < 10000; ++n)
    {
      for (int m = 0; m < 10000; ++m)
      {
        double prod = vd * n * m; // reads from a volatile
        vd += prod; // reads from and writes to a volatile
      } 
    }
    printf("Modified a volatile variable 100m times. "
            "Time used: %.2f seconds",
            (double)(clock() - t)/CLOCKS_PER_SEC);
}`}
            language='c'
            showLineNumbers={false}
            theme={dracula}
          />
          <p>
            Here is the documentation for the <a href="https://en.cppreference.com/w/c/language/volatile" target="_blank" rel="noreferrer noopener" className="underline">volatile type qualifier.</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}