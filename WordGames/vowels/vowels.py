# Program to create a list for all of the words with all the vowels
#currently getting hte wrong shortest word with all vowels
# importing the word list
sow_pods = open("/home/evergreen/UnderDogsAssignments/sowpods")

# Go through each word in the file and add it to the list, words
words = []
vowels = []

for line in sow_pods:
    words.append(line.strip())

for w in words:
    if ("A" in w) and ("E" in w) and ("I" in w) and ("O" in w)and ("U" in w):
        vowels.append(w)

print('All of the words that have  vowels, including Y are ' + str(vowels))

# Find the longest word that has no vowels
shortest = 'RHEUMATOIDALLY'
length = len(shortest)
for y in vowels:
    if len(y) < length:
        shortest = y
        length = len(shortest)

print('The shortest word with all the vowels in it is ' + str(shortest))

a = int()
e = int()
i = int()
o = int()
u = int()
vowels_alph = []

#Cycle through each index of vowels, find the placement of each vowel and then compare and 
# add to vowels_alph accordingly
for x in vowels:
    a = x.index("A")
    e = x.index("E")
    i = x.index("I")
    o = x.index("O")
    u = x.index("U")
    if a < e:
        if e < i:
            if i < o:
                #if o < u:
                    vowels_alph.append(x)
        

print(vowels_alph)