How to Run?

1. yarn install
2. yarn start
3. open any browser and navigate to localhost:5000

Requirements
1. This is a typeahead search. The search results should be displayed as user is typing.
2. The implementation should be purely done in frontend using React.
3. We want to show top 10 results only. The results should ordered based on the
"relevancy_score" (descending in order of relevancy score)
4. The matching string (ie, search keywords) should be highlighted in the results. Do note
that match can occur in both "title" of the post as well as "body" of the post. The API
would return the body snippet "story_text" if a match is found there. You'll have to
highlight the search keywords.
5. Ensure to keep the implementation as performant as possible, both in terms of UI
responsiveness and the amount of network calls we perform.
6. This is a reference implementation if you want to see how it should work: HN Search
powered by Algolia (Do note this reference implementation has a lot of other features
which we don't need to implement. Look at the mock ups above and stick to it)
