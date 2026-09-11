import csv
from tracker.models import Route, BusStop

CSV_FILE = "bus_routes_dataset.csv"

# Clear existing route data before importing
BusStop.objects.all().delete()
Route.objects.all().delete()

routes_created = 0
stops_created = 0

with open(CSV_FILE, "r", encoding="utf-8-sig") as file:
    reader = csv.DictReader(file)

    for row in reader:
        route_id = row["Route_ID"].strip()

        route, created = Route.objects.get_or_create(
            route_id=route_id,
            defaults={
                "route_name": row["Route_Name"].strip(),
                "service_type": row["Service_Type"].strip(),
            }
        )

        if created:
            routes_created += 1

        BusStop.objects.create(
            route=route,
            stop_seq=int(row["Stop_Seq"]),
            stop_village_name=row["Stop_Village_Name"].strip(),
            district=row["District"].strip(),
            taluk=row["Taluk"].strip(),
            stop_category=row["Stop_Category"].strip(),
            cumulative_dist_km=float(row["Cumulative_Dist_km"]),
            stop_dwell_min=int(row["Stop_Dwell_min"]),
            cumulative_travel_time_min=int(row["Cumulative_Travel_Time_min"]),
            latitude=None,
            longitude=None,
        )

        stops_created += 1

print()
print("====================================")
print("   DATASET IMPORT COMPLETED")
print("====================================")
print(f"Routes created : {routes_created}")
print(f"Stops created  : {stops_created}")
print("====================================")
