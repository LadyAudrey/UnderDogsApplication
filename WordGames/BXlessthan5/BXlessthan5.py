# Program to create a list for all of the words that have a B and an X and are less than 5 letters long

# importing the word list
sow_pods = open("/home/evergreen/UnderDogsAssignments/sowpods")

# creating lists; one for the words, one for all the words that have B and X's
# and one for all words that have B and X, less than 5
words = []
bx = []
bx5 = []

# Go through each word in the file and add it to the list, words

for line in sow_pods:
    words.append(line.strip())

# go through words, see if B and X are in it, append to bx, then cycle through and add any <5 to bx5
for w in words:
  if ("B" in w) and ("X"  in w):
      bx.append(w)

for y in bx:
    if len(y) < 5:
        bx5.append(y)
    
print('All of the words that have B and X and are less than 5 letters long are:' + str(bx5))