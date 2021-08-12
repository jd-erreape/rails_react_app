FactoryBot.define do
  factory :product do
    code { Faker::Alphanumeric.unique.alpha(number: 3).upcase }
    name  { Faker::Food.dish }
    price { rand*(100-1)+1 }
  end
end