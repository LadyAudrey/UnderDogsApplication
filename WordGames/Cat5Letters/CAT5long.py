# Program to create a list for all of the words containing CAT and are exactly 5 letters long?


# importing the word list
sow_pods = open("/home/evergreen/UnderDogsAssignments/sowpods")

# Go through each word in the file and add it to the list, words
words = []
cat = []
cat5 = []
x = 0

for line in sow_pods:
    words.append(line.strip())

for w in words:
  if ("CAT" in w):
      cat.append(w)

for x in cat:
    if len(x) == 5:
        cat5.append(x)
        #x = x + 1
    
print('All of the words that have "CAT" and are 5 letters long are:' + str(cat5))