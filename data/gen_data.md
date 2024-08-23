## 手工构造数据

```bash
curl -ku admin:admin -H 'Content-Type: application/x-ndjson' -XPOST 'https://localhost:9200/_bulk' --data-binary @bulk_data.json
```
