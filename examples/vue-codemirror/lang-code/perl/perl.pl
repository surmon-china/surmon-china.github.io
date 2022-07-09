#
# One more approach is to use the array/hash conversion rules to
# build keyword parameters, with defaults.
#

use strict;

# Print a string one or more times under all sorts of controls.
sub barko {
    # Check for correct pairing.
    @_ % 2 == 0 or
        die "barko: Odd number of arguments.\n";

    # Store the parms, with defaults.
    my %parms = ( 'string' => 'snake',  # String to print
                  'between' => '',      # Place between chars.
                  'repeat' => 1,        # Repeat this many times.
                  'cascade' => 0,       # Move each line right this much more.
                  'blankafter' => 1,    # Extra blank line afterwards.
                  @_);
    # Now %parms is a list of keyword => value pairs as sent, using
    # defaults for keys not sent.

    # Add the between to the string.
    my $str = substr($parms{'string'}, 1);
    $str =~ s/(.)/$parms{'between'}$1/g;
    $str = substr($parms{'string'}, 0, 1) . $str;

    # Printin' time!
    my $preamt = 0;
    for(my $n = $parms{'repeat'}; $n--; ) {
        print ((' ' x $preamt), "$str\n");
        $preamt += $parms{'cascade'};
    }
    print "\n" if $parms{'blankafter'};
}

# Call with various options.  These can be sent in any order.
barko;
barko(repeat => 3, string => 'BOZON', cascade => 1);
barko(between => ' ');
barko(between => '<->', repeat => 5);
barko(string => '** done **', blankafter => 0);