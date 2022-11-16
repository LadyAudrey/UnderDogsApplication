#find all the words that when spelled backwards is a valid Scrabble word

# importing the country list
names = open("/home/evergreen/UnderDogsAssignments/BabyNames/baby_names_2020_short.txt")

#turning countries.doc into an array
names2020 = []
for line in names:
    names2020.append(line.strip())

# importing the word list then go through each word in the file and add it to the list, words
sow_pods = open("/home/evergreen/UnderDogsAssignments/sowpods")
words = []
for line in sow_pods:
    words.append(line.strip())

# reversing names2020 and then comparing them against the words list
names2020reverse = []
name_is_scrabble =[]
upper_reverse_name = ''
for name in names2020:
    reverse_name = name[::-1]
    upper_reverse_name = reverse_name.upper()
    names2020reverse.append(upper_reverse_name)
    for word in words:
        if upper_reverse_name == word:
            name_is_scrabble.append(name)

print("The names when reversed are scrabbled words are " + str(name_is_scrabble))