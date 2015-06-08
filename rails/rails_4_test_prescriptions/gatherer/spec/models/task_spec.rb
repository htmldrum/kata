require 'rails_helper'

RSpec.describe Task do
  it "can distinguish a completed task" do
    task = Task.new
    expect(task).not_to be_complete
    task.mark_completed
  end
end
