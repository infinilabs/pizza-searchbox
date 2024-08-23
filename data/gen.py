import json

def generate_bulk_data(hits_data):
  """Generates the bulk data JSON for Elasticsearch from hits data."""

  bulk_data = []
  for result in hits_data['results']:
    index_name = result['indexUid'].lower()
    for hit in result['hits']:
      bulk_data.extend([
          json.dumps({'index': {'_index': index_name, '_id': hit['id']}}),
          '\n',
          json.dumps({
              'id': hit['id'],
              'title': hit['title'],
              'overview': hit['overview'],
              # ... include other fields you want to index ...
          }),
          '\n'
      ])
  return ''.join(bulk_data)

# Example usage:
with open('hits_data.json', 'r') as f:  # Load your hits data from a JSON file
  hits_data = json.load(f)

bulk_data_string = generate_bulk_data(hits_data)

with open('bulk_data.json', 'w') as f:
  f.write(bulk_data_string)

print("Bulk data JSON file ('bulk_data.json') generated successfully!")
