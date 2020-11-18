puts "Merci d'indiquer ci-dessous le mot a inverser"
mot = gets.chomp

def inversion(mot)
	return mot.reverse
end

puts "Voici le mot inversé "+inversion(mot)