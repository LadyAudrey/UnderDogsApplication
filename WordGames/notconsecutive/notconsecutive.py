# Program to create a list for all of the letters that do not appear consecutively in a word 

# importing the word list
sow_pods = open("/home/evergreen/UnderDogsAssignments/sowpods")

# Go through each word in the file and add it to the list, words
words = []
double_letters = ["AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH", "II", "JJ", "KK", "LL", "MM",
                  "NN", "OO", "PP", "QQ", "RR", "SS", "TT", "UU", "VV", "WW", "XX", "YY", "ZZ"]

for line in sow_pods:
    words.append(line.strip())

for a in words:
    for b in double_letters:
        if b in a:
            double_letters.remove(b)

print("The letters that do not appear consecutively in words are " + str(double_letters))
