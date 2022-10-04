# A program to create a list from a file, and then seperate all words that end with "ghtly" into another list
words = []
ghtly = 'GHTLY'
list_of_ghtly = []

# importing the word list
sow_pods = open("/home/evergreen/UD/.idea/SowPods")

# Go through each word in the file and add it to the list, words
for line in sow_pods:
    words.append(line.strip())