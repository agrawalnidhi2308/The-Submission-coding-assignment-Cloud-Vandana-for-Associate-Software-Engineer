function reverseWords(sentence) {
    // Split the sentence into words using a regular expression
    const words = sentence.split(/\s+/);
  
    // Reverse each word and store the reversed words in an array
    const reversedWords = words.map(word => {
      // Reverse the characters of each word
      const reversedWord = word.split('').reverse().join('');
      return reversedWord;
    });
  
    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  // Example usage
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); // Output: "sihT si a ynnus yad"