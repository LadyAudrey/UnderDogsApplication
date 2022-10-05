# A program to create a list from a file, and then a list of palendromes, and print the longest palendrome
words = []
palendrome = []
longest_palendrome = ''

# importing the word list
sow_pods = open("/home/evergreen/UnderDogsAssignments/sowpods")

# Go through each word in the file and add it to the list, words
for line in sow_pods:
    words.append(line.strip())

# Go through the list and add it to palendrome as appropriate
for x in words:
    if  x == x[::-1]:
        palendrome.append(x)                               
     

# Create print statement for the longest palendrome
longest = ''
length = len(longest)
for y in palendrome:
    if len(y) > length:
        longest = y
        length = len(longest)
        
print("This is the longest palendrome':\n" + str(longest))