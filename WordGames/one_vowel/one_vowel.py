# Create and print an array containing all of the words that have a U but no other vowel. 

words = open("/home/evergreen/UnderDogsAssignments/sowpods")

#turning countries.doc into an array
words_list = []
for line in words:
    words_list.append(line.strip())

#iterate through country, incriment variables for vowels, add to one_vowel as appropriate
one_vowel = []
for  word in words_list:
    if "U" in word and "A" not in word and "E" not in word and "I" not in word and "O" not in word and "Y" not in word:
            one_vowel.append(word)

print("All the words that have Us but no other vowels are " + str(one_vowel))