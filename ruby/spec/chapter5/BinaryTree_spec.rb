require_relative '../../lib/chapter5/BinaryTree.rb'

describe BinaryTree do

  before(:each) do
    @bt = BinaryTree.new('root', 
                      BinaryTree.new('dog',
                                     BinaryTree.new('husky',
                                                    BinaryTree.new('benf',nil,nil),
                                                    BinaryTree.new('alice',nil,nil),
                                     ),
                                     BinaryTree.new('alsatian',
                                                    BinaryTree.new('graeme',nil,nil),
                                                    BinaryTree.new('cindy',nil,nil)
                                     )
                      ),
                      BinaryTree.new('cat',
                                     BinaryTree.new('nice ones',
                                                    BinaryTree.new('schnee',nil,nil),
                                                    BinaryTree.new('gonzo',nil,nil),
                                     ),
                                     BinaryTree.new('mean ones',
                                                    BinaryTree.new('sassy',nil,nil),
                                                    BinaryTree.new('asshole',nil,nil)
                                     )
                      ),
)
  end

  it "exists" do
    expect(@bt.nil?).to equal false
    expect(@bt.value.to_s).to eq "root"
  end
  
  it "implements breadth_first_search" do
    expect(@bt.respond_to? :breadth_first_search).to equal true

    expect(@bt.breadth_first_search "schnee").to equal true
    expect(@bt.breadth_first_search "not schnee").to equal false
  end

  it "implements depth_first_search" do
    expect(@bt.respond_to? :depth_first_search).to equal true
    
    expect(@bt.depth_first_search "gonzo").to equal true
    expect(@bt.depth_first_search "not gonzo").to equal false

  end

end
