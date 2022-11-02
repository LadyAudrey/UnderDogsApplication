# What are all of the words that start with a Q, end with a Z, and are less than or equal to 6 letters long? 

words = open("/home/evergreen/UnderDogsAssignments/sowpods")

#turning countries.doc into an array
words_list = []
for line in words:
    words_list.append(line.strip())

#Empty lists
q = []

# Finding all the words that start with a Q. add to a list
for word in words_list:
    if word[0] == "Q" and word[-1] == "Z" and len(word) <= 6:
        q.append(word)

print(q)

