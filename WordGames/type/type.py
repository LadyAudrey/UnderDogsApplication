# A program to create a list from a file, and then create a list of all the words containing the string "type"
words = []
type = 'TYPE'
list_of_type = []

# importing the word list
sow_pods = open("/home/evergreen/UnderDogsAssignments/sowpods")

# Go through each word in the file and add it to the list, words
for line in sow_pods:
    words.append(line.strip())

# Go through the list and add it to list_of_type as appropriate
for x in range(len(words)):
    if type in words[x]:
        list_of_type.append(words[x])
        
print(list_of_type)