# Program to create a list for all of the words that are palindromes
# Then print the longest palindrome
# importing the word list
from curses import A_ALTCHARSET


sow_pods = open("/home/evergreen/UnderDogsAssignments/sowpods")

# creating lists; one for the words & one for all the words thare palindromes
words = []
palindromes = []
a = 0

# Go through each word in the file and add it to the list, words

for line in sow_pods:
    words.append(line.strip())

# go through words and add any palindrome to the list  palindromes
for a in words:
    reverse_word = a[::-1]
    if a == reverse_word:
        palindromes.append(reverse_word)

print("All the palindromes are " + str(palindromes))

# Find the longest palindrome and print it
longest_palindrome = "AA"
for b in palindromes:
    if len(b) > len(longest_palindrome):
        longest_palindrome = b
print("The longest palindrome is " + longest_palindrome)