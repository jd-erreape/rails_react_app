json.array! @products do |product|
  json.code product.code
  json.name product.name
  json.price product.price
end