function generateAnagrams(word) {
    // Helper function to generate anagrams recursively
    function generate(word, anagram = '', anagrams = []) {
        if (word === '') {
            anagrams.push(anagram);
            return;
        }

        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            const rest = word.slice(0, i) + word.slice(i + 1);
            generate(rest, anagram + char, anagrams);
        }

        return anagrams;
    }

    // Remove duplicates using Set and convert back to array
    return new Set(generate(word));
}

const startTime = performance.now();

// Example usage
const word = "gulyas lasz";
const anagrams = generateAnagrams(word);
console.log(anagrams);

const end = performance.now();
console.log(`Execution time: ${end - startTime} ms`);