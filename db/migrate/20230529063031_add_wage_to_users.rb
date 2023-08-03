class AddWageToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :wage, :integer
  end
end
