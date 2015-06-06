# == Schema Information
#
# Table name: tests
#
#  id         :integer          not null, primary key
#  title      :string
#  content    :text
#  created_at :datetime
#  updated_at :datetime
#

class Test < ActiveRecord::Base
end
