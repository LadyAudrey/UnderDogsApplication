# Program to create a list for all of the words that have a X, Y and Z

# importing the word list
sow_pods = open("/home/evergreen/UnderDogsAssignments/sowpods")

# creating lists; one for the words, one for all the words that have B and X's
# and one for all words that have B and X, less than 5
words = []
xyz = []

# Go through each word in the file and add it to the list, words

for line in sow_pods:
    words.append(line.strip())

# go through words, see if B and X are in it, append to bx, then cycle through and add any <5 to bx5
for w in words:
  if ("Y" in w) and ("X" in w) and ("Z" in w):
      xyz.append(w)
    
print('All of the words that contan x, y and z are ' + str(xyz))