class CreateUsers < ActiveRecord::Migration[7.0]
  has_secure_password
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
    end
  end
end
