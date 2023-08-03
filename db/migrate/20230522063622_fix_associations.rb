class FixAssociations < ActiveRecord::Migration[7.0]
  def change
    remove_column :bookings, :status, :string
    add_column :bookings, :status, :integer, default: 0
    remove_reference :meetings, :video
    add_reference :meetings, :video, null: true, foreign_key: true
  end
end
