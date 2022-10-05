# Program to create a list for all of the Letters that are not in words consecutively

# importing the word list
sow_pods = open("/home/evergreen/UnderDogsAssignments/sowpods")

# Go through each word in the file and add it to the list, words
words = []

for line in sow_pods:
    words.append(line.strip())

letters = ["AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH", "II", "JJ", "KK", "LL",
           "MM", "NN", "OO", "PP", "QQ", "RR", "SS", "TT", "UU", "VV", "WW", "XX", "YY", "ZZ"]
consecutive_letters = []

# Cycle through the words list, see if the consecutive letters are in it and add to consecutive_letters accordingly
for b in words:
    for a in letters:
        if a  in b:
            letters.remove(a)
            
print(letters)
