# toy program to make a list of all the countries who's name countains 50% vowels

# importing the country list
countries = open("/home/evergreen/UnderDogsAssignments/Countries/countries.txt")

#turning countries.doc into an array
countries_list = []
for line in countries:
    countries_list.append(line.strip())
    
# Creating lists of vowels and countries that are >= vowels and a vowels int to increment with each letter
vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u", "Y", "y"]
fifty_per_vowels = []

#Loop through list and have increment vowel(int) with each vowel
for country in countries_list:
    vowel = int(0)
    half = len(country)/2
    for element in country:
        if element in vowels:
            vowel = vowel + 1
            #If the vowels variable is => 50%, add to fifty_per_vowels
            if vowel >= half:
                fifty_per_vowels.append(country)
                #print(country)

print("All of the countries who's names contain 50% or more of vowels are " + str(fifty_per_vowels))
