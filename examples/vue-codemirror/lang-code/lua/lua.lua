Set = {}

Set.mt = {}    -- metatable for sets


function Set.mt.__add (a,b)
  local res = Set.new{}
  for k in pairs(a) do res[k] = true end
  for k in pairs(b) do res[k] = true end
  return res
end


function Set.mt.__mul (a,b)
  local res = Set.new{}
  for k in pairs(a) do
    res[k] = b[k]
  end
  return res
end


function Set.mt.__le (a,b)    -- set containment
  for k in pairs(a) do
    if not b[k] then return false end
  end
  return true
end


function Set.mt.__lt (a,b)
  return a <= b and not (b <= a)
end


function Set.mt.__eq (a,b)
  return a <= b and b <= a
end


function Set.mt.__tostring (set)
  local s = "{"
  local sep = ""
  for e in pairs(set) do
    s = s .. sep .. e
    sep = ", "
  end
  return s .. "}"
end


function Set.new (t)
  local set = {}
  setmetatable(set, Set.mt)
  for _, l in ipairs(t) do set[l] = true end
  return set
end


-- some examples
s1 = Set.new{10, 20, 30, 50}
s2 = Set.new{30, 1}
s3 = s1 + s2
print(s3)               --> {10, 30, 20, 1, 50}
print((s1 + s2)*s1)     --> {10, 20, 30, 50}

s1 = Set.new{2, 4}
s2 = Set.new{4, 10, 2}
print(s1 <= s2)       --> true
print(s1 < s2)        --> true
print(s1 >= s1)       --> true
print(s1 > s1)        --> false
print(s1 == s2 * s1)  --> true