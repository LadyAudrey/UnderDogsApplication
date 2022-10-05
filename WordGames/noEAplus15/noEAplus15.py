# Program to create a list for all of the words that hhave no Es or As and are at least 15 letters long

# importing the word list
sow_pods = open("/home/evergreen/UnderDogsAssignments/sowpods")

# Go through each word in the file and add it to the list, words
words = []
noEA = []
noEA15 = []

for line in sow_pods:
    words.append(line.strip())

for w in words:
  if ("E" not in w) and ("A" not  in w):
      noEA.append(w)

for y in noEA:
    if len(y) >= 15:
        noEA15.append(y)
    
print('All of the words that have no As or Es and are at least 15 letters long are ' + str(noEA15))