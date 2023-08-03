class AddEndDateToMeetings < ActiveRecord::Migration[7.0]
  def change
    add_column :meetings, :end_date, :datetime
  end
end
