# Program to create a list for all of the Letters that are not in words consecutively

# importing the word list
sow_pods = open("/home/evergreen/UD/.idea/SowPods")

# Go through each word in the file and add it to the list, words
words = []
letters = ["AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH", "II", "JJ", "KK", "LL",
           "MM", "NN", "OO", "PP", "QQ", "RR", "SS", "TT", "UU", "VV", "WW", "XX", "YY", "ZZ"]
consecutive_letters = []

for a in letters:
    for b in words:
        if a not in b:
            consecutive_letters.append(a)
            
print(consecutive_letters)
