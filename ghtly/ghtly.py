# A program to create a list from a file, and then seperate all words that end with "ghtly" into another list
words = []
ghtly = 'GHTLY'
list_of_ghtly = []

# importing the word list
sow_pods = open("/home/evergreen/UD/.idea/SowPods")

# Go through each word in the file and add it to the list, words
for line in sow_pods:
    words.append(line.strip())

# Go through the list and add it to list_of_uu as appropriate
for x in range(len(words)):
    if ghtly in words[x]:
        list_of_ghtly.append(words[x])                               

# Create print statement showing the list of words that end with "ghtly"
print("These are the words ending in 'ghtly':\n" + str(list_of_ghtly))