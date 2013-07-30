class ChangeTable < ActiveRecord::Migration
  def change
    change_column :entries, :json, :text, :null => true
  end
end
