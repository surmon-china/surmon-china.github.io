# Using re's to break up a line.
print "Please enter a line: "
line = gets.chomp

res = [ ]
while res != ''
    # String leading blanks.
    line.sub!(/^\s*/, '')

    break if line == ''

    # See what the leading is for next action.
    if line[0].chr == '"' then
        # Quoted.
        line.sub!(/^"([^"]*)"/, '')
        res.push($1)
    elsif line.sub!(/^(\d+):(\S+)/, '')
        # Repeated with n:
        $1.to_i.times { res.push($2) }
    else
        # Just a word.
        line.sub!(/^(\S+)/, '')
        res.push($1)
    end

end

res.each { |x| print "  [", x, "]\n" }