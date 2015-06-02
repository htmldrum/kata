class BinaryTree

  attr_accessor :value,:left,:right

  def initialize(value,left,right)
    @value = value
    @left = left
    @right = right
  end

  def breadth_first_search(target,trace=false)

    q = []
    q.push(self)

    while(q.length > 0)

      v = q.shift

      puts "Searching: #{v}" if trace

      if v.value == target
        return true
      else
        # For BTrees, generalize over children
        q.push(v.left) if v.left
        q.push(v.right) if v.right
      end

    end

    return false

  end

  def depth_first_search(target,trace=false)

    puts "Searching: #{self}" if trace

    if @value == target
      return true
    else
      return true if @left && @left.depth_first_search(target)
      return true if @right && @right.depth_first_search(target)
    end

    return false

  end

  def to_s
    @value.to_s
  end

end
