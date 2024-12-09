# Parallel Mergesort

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice." 

https://www.geeksforgeeks.org/merge-sort/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

https://www.geeksforgeeks.org/merge-sort-using-multi-threading/

^Didn't like the way this was implemented, did further research into setTimeout and learned about promises

https://www.doabledanny.com/merge-sort-javascript

^used this as a source of inspiration as I didn't think that the mergesort that I previously had used would function properly

https://www.geeksforgeeks.org/how-to-convert-an-existing-callback-to-a-promise-in-node-js/

https://stackoverflow.com/questions/29020722/recursive-promise-in-javascript

https://write.as/nadeesha/from-promises-to-futures-in-javascript

https://stackoverflow.com/questions/33289726/combination-of-async-function-await-settimeout

^Really helped me in outputting everything I needed specifically user Bergi's answer to utilize promise.all to return the proper values

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

https://stackoverflow.com/questions/45876514/async-function-await-not-waiting-for-promise

^I couldn't for the life of me figure out why the last recursive iteration of the function mergesort was not finishing before outputting. This helped me in realizing I must await for it to finish in order to get an output that is not a promise

Used my test code from 

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

Prefice: I put a significant time into attempting to utilize a parrel reduce to implement mergesort, however it was incredebly difficult to find any information on that subject, in addition to most topics being focused on hadoops mapReduce sort. This has, however, offered me a lot of insight into how that particular sort works and mergesort as well as the they are both divide and conquer. Consequently I also learned that there is a relation to map and reduce, if the sorting is reduce sided it is mergesort, if it is map sided it is closer to quicksort.

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

Given that mergeSort() recursively splits itself (creating a new "process/thread" each time it does so until the arrays are less that one) the longest path would be logn so then the span is $\Theta(logn)$. 
Runtime is $\Theta(nlogn)$ as merge() takes on average N amount of time (based on comparisons).
