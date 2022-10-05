# Program to create a list for all of the words with no vowel and not even a Y

# importing the word list
sow_pods = open("/home/evergreen/UnderDogsAssignments/sowpods")

# Go through each word in the file and add it to the list, words
words = []
novowels = []

for line in sow_pods:
    words.append(line.strip())

for w in words:
    if ("A" not in w) and ("E" not in w) and ("I" not in w) and ("O" not in w)and ("U" not in w) and ("Y" not in w):
        novowels.append(w)

print('All of the words that have no vowels, including Y are ' + str(novowels))

# Find the longest word  in the lost of novowels
longest = ''
length = len(longest)
for y in novowels:
    if len(y) > length:
        longest = y
        length = len(longest)

print('The longest word with no vowels in it is ' + longest)