# toy program to make a list of all the countries' names who only contain one vowel

# importing the country list
from xml.etree.ElementInclude import include


countries = open("/home/evergreen/UnderDogsAssignments/Countries/countries.txt")

#turning countries.doc into an array
countries_list = []
for line in countries:
    countries_list.append(line.strip())


#iterate through country, incriment variables for vowels, add to one_vowel as appropriate
one_vowel = []
for country in countries_list:
    lower_case = country.lower()
    if "a" in lower_case and "e" not in lower_case and "i" not in lower_case and "o" not in lower_case and not "u" in lower_case and "y" not in lower_case:
        one_vowel.append(country)
    if "e" in lower_case and "a" not in lower_case and "i" not in lower_case and "o" not in lower_case and not "u" in lower_case and "y" not in lower_case:
        one_vowel.append(country)
    if "i" in lower_case and "e" not in lower_case and "a" not in lower_case and "o" not in lower_case and not "u" in lower_case and "y" not in lower_case:
        one_vowel.append(country)
    if "o" in lower_case and "e" not in lower_case and "i" not in lower_case and "a" not in lower_case and not "u" in lower_case and "y" not in lower_case:
        one_vowel.append(country)
    if "u" in lower_case and "e" not in lower_case and "i" not in lower_case and "o" not in lower_case and not "a" in lower_case and "y" not in lower_case:
        one_vowel.append(country)

print("All the countries who's name contains exclusively one vowel are " + str(one_vowel))
