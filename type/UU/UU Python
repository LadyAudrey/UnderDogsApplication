# A program to create a list from a file, and then seperate all words that have 'uu' into another list
words = []
double_u = 'UU'
list_of_uu = []

# importing the word list
sow_pods = open("/home/evergreen/UD/.idea/SowPods")

# Go through each word in the file and add it to the list, words
for line in sow_pods:
    words.append(line.strip())

# Go through the list and add it to list_of_uu as appropriate
for x in range(len(words)):
    if double_u in words[x]:
        list_of_uu.append(words[x])

# Create print statement showing the list of words that have "UU"
print("This is all of the words containing UU:\n" + str(list_of_uu))