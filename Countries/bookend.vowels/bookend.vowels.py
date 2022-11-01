# toy program to make a list of all the countries that begin and end with vowels

# importing the country list
countries = open("/home/evergreen/UnderDogsAssignments/Countries/countries.txt")

#turning countries.doc into an array
countries_list = []
for line in countries:
    countries_list.append(line.strip())

# Creating a list of vowels and and then going through
# countries_list to add to a countries_bookend_vowels as appropriate
vowels = ["A", "E", "I", "O", "U", "Y"]
lower_case_vowels = ["a", "e", "i", "o", "u", "y"]
bookend_vowels = []

for country in countries_list:
    # if index[0] of country is contained in vowels
    if country[0] in vowels:
        # if the last index of country is contained in vowels
        length = len(country)
        last_char = country[length -1]
        if last_char in lower_case_vowels:
            bookend_vowels.append(country)

print("All of the countries who's name begins and end with a vowel are " + str(bookend_vowels))
