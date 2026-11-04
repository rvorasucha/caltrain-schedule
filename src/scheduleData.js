// Weekday Caltrain timetable, effective January 31, 2026.
// Source: CT_PrinterFriendlySchedule_01-31-2026_FINAL.pdf
// minutes are counted on the service day, so times after midnight are past 24:00.

export const SCHEDULE_EFFECTIVE = "January 31, 2026";

export const STATIONS_NORTHBOUND = [
  "Tamien",
  "San Jose Diridon",
  "Santa Clara - - -",
  "Lawrence - - -",
  "Sunnyvale",
  "Mountain View",
  "San Antonio - - -",
  "California Avenue - - -",
  "Palo Alto",
  "Menlo Park - - -",
  "Redwood City",
  "San Carlos - - - - - - -",
  "Belmont - - - - - - -",
  "Hillsdale",
  "Hayward Park - - - - - - -",
  "San Mateo",
  "Burlingame - - - - - - -",
  "Millbrae",
  "San Bruno - - - - - - -",
  "S. San Francisco",
  "Bayshore - - - - - - -",
  "22 Street",
  "San Francisco",
  "8XX South County Connector",
  "Gilroy",
  "San Martin",
  "Morgan Hill",
  "Blossom Hill",
  "Capitol",
  "College Park - - - - - - - - - - - - - - - - - - - - - - -",
  "Santa Clara - - - -",
  "Lawrence - - - -",
  "San Antonio - - - -",
  "California Avenue - - - -",
  "Menlo Park - - - -",
  "San Carlos - - - - - - - -",
  "Belmont - - - - - - - -",
  "Hayward Park - - - - - - - -",
  "Burlingame - - - - - - - -",
  "San Bruno - - - - - - - -",
  "Bayshore - - - - - - - -",
  "College Park - - - - - - - - - - - - - - - - - - - - - - - - - - -"
];

export const STATIONS_SOUTHBOUND = [
  "San Francisco",
  "22 Street",
  "Bayshore - - - - - - -",
  "S. San Francisco",
  "San Bruno - - - - - - -",
  "Millbrae",
  "Burlingame - - - - - - -",
  "San Mateo",
  "Hayward Park - - - - - - -",
  "Hillsdale",
  "Belmont - - - - - - -",
  "San Carlos - - - - - - -",
  "Redwood City",
  "Menlo Park - - - -",
  "Palo Alto",
  "California Avenue - - - -",
  "San Antonio - - - -",
  "Mountain View",
  "Sunnyvale",
  "Lawrence - - - -",
  "Santa Clara - - - -",
  "San Jose Diridon",
  "Tamien",
  "8XX South County Connector",
  "College Park - - - - - - - - - - - - - - - - - - - - - - - - -",
  "Capitol",
  "Blossom Hill",
  "Morgan Hill",
  "San Martin",
  "Gilroy",
  "Menlo Park - - -",
  "California Avenue - - -",
  "San Antonio - - -",
  "Lawrence - - -",
  "Santa Clara - - -"
];

export const TRAINS = [
  {
    "trainNum": "101",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "4:37 AM",
        "minutes": 277
      },
      {
        "station": "San Jose Diridon",
        "time": "4:43 AM",
        "minutes": 283
      },
      {
        "station": "Santa Clara - - -",
        "time": "4:49 AM",
        "minutes": 289
      },
      {
        "station": "Lawrence - - -",
        "time": "4:54 AM",
        "minutes": 294
      },
      {
        "station": "Sunnyvale",
        "time": "4:57 AM",
        "minutes": 297
      },
      {
        "station": "Mountain View",
        "time": "5:01 AM",
        "minutes": 301
      },
      {
        "station": "San Antonio - - -",
        "time": "5:04 AM",
        "minutes": 304
      },
      {
        "station": "California Avenue - - -",
        "time": "5:07 AM",
        "minutes": 307
      },
      {
        "station": "Palo Alto",
        "time": "5:10 AM",
        "minutes": 310
      },
      {
        "station": "Menlo Park - - -",
        "time": "5:13 AM",
        "minutes": 313
      },
      {
        "station": "Redwood City",
        "time": "5:18 AM",
        "minutes": 318
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "5:22 AM",
        "minutes": 322
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "5:24 AM",
        "minutes": 324
      },
      {
        "station": "Hillsdale",
        "time": "5:27 AM",
        "minutes": 327
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "5:30 AM",
        "minutes": 330
      },
      {
        "station": "San Mateo",
        "time": "5:32 AM",
        "minutes": 332
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "5:35 AM",
        "minutes": 335
      },
      {
        "station": "Millbrae",
        "time": "5:39 AM",
        "minutes": 339
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "5:42 AM",
        "minutes": 342
      },
      {
        "station": "S. San Francisco",
        "time": "5:45 AM",
        "minutes": 345
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "5:50 AM",
        "minutes": 350
      },
      {
        "station": "22 Street",
        "time": "5:55 AM",
        "minutes": 355
      },
      {
        "station": "San Francisco",
        "time": "6:01 AM",
        "minutes": 361
      }
    ]
  },
  {
    "trainNum": "103",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "5:08 AM",
        "minutes": 308
      },
      {
        "station": "Santa Clara - - -",
        "time": "5:14 AM",
        "minutes": 314
      },
      {
        "station": "Lawrence - - -",
        "time": "5:19 AM",
        "minutes": 319
      },
      {
        "station": "Sunnyvale",
        "time": "5:22 AM",
        "minutes": 322
      },
      {
        "station": "Mountain View",
        "time": "5:26 AM",
        "minutes": 326
      },
      {
        "station": "San Antonio - - -",
        "time": "5:29 AM",
        "minutes": 329
      },
      {
        "station": "California Avenue - - -",
        "time": "5:32 AM",
        "minutes": 332
      },
      {
        "station": "Palo Alto",
        "time": "5:35 AM",
        "minutes": 335
      },
      {
        "station": "Menlo Park - - -",
        "time": "5:38 AM",
        "minutes": 338
      },
      {
        "station": "Redwood City",
        "time": "5:43 AM",
        "minutes": 343
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "5:47 AM",
        "minutes": 347
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "5:49 AM",
        "minutes": 349
      },
      {
        "station": "Hillsdale",
        "time": "5:52 AM",
        "minutes": 352
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "5:55 AM",
        "minutes": 355
      },
      {
        "station": "San Mateo",
        "time": "5:57 AM",
        "minutes": 357
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "6:00 AM",
        "minutes": 360
      },
      {
        "station": "Millbrae",
        "time": "6:04 AM",
        "minutes": 364
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "6:07 AM",
        "minutes": 367
      },
      {
        "station": "S. San Francisco",
        "time": "6:10 AM",
        "minutes": 370
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "6:15 AM",
        "minutes": 375
      },
      {
        "station": "22 Street",
        "time": "6:20 AM",
        "minutes": 380
      },
      {
        "station": "San Francisco",
        "time": "6:26 AM",
        "minutes": 386
      }
    ]
  },
  {
    "trainNum": "401",
    "type": "Limited",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "5:43 AM",
        "minutes": 343
      },
      {
        "station": "Santa Clara - - -",
        "time": "5:49 AM",
        "minutes": 349
      },
      {
        "station": "Lawrence - - -",
        "time": "5:54 AM",
        "minutes": 354
      },
      {
        "station": "Sunnyvale",
        "time": "5:57 AM",
        "minutes": 357
      },
      {
        "station": "Mountain View",
        "time": "6:01 AM",
        "minutes": 361
      },
      {
        "station": "San Antonio - - -",
        "time": "6:04 AM",
        "minutes": 364
      },
      {
        "station": "California Avenue - - -",
        "time": "6:07 AM",
        "minutes": 367
      },
      {
        "station": "Palo Alto",
        "time": "6:10 AM",
        "minutes": 370
      },
      {
        "station": "Menlo Park - - -",
        "time": "6:13 AM",
        "minutes": 373
      },
      {
        "station": "Redwood City",
        "time": "6:18 AM",
        "minutes": 378
      },
      {
        "station": "Hillsdale",
        "time": "6:25 AM",
        "minutes": 385
      },
      {
        "station": "San Mateo",
        "time": "6:28 AM",
        "minutes": 388
      },
      {
        "station": "Millbrae",
        "time": "6:33 AM",
        "minutes": 393
      },
      {
        "station": "S. San Francisco",
        "time": "6:39 AM",
        "minutes": 399
      },
      {
        "station": "22 Street",
        "time": "6:47 AM",
        "minutes": 407
      },
      {
        "station": "San Francisco",
        "time": "6:53 AM",
        "minutes": 413
      },
      {
        "station": "8XX South County Connector",
        "time": "6:40 AM",
        "minutes": 400
      }
    ]
  },
  {
    "trainNum": "105",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "5:52 AM",
        "minutes": 352
      },
      {
        "station": "San Jose Diridon",
        "time": "5:58 AM",
        "minutes": 358
      },
      {
        "station": "Santa Clara - - -",
        "time": "6:04 AM",
        "minutes": 364
      },
      {
        "station": "Lawrence - - -",
        "time": "6:09 AM",
        "minutes": 369
      },
      {
        "station": "Sunnyvale",
        "time": "6:12 AM",
        "minutes": 372
      },
      {
        "station": "Mountain View",
        "time": "6:16 AM",
        "minutes": 376
      },
      {
        "station": "San Antonio - - -",
        "time": "6:19 AM",
        "minutes": 379
      },
      {
        "station": "California Avenue - - -",
        "time": "6:22 AM",
        "minutes": 382
      },
      {
        "station": "Palo Alto",
        "time": "6:25 AM",
        "minutes": 385
      },
      {
        "station": "Menlo Park - - -",
        "time": "6:28 AM",
        "minutes": 388
      },
      {
        "station": "Redwood City",
        "time": "6:33 AM",
        "minutes": 393
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "6:37 AM",
        "minutes": 397
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "6:39 AM",
        "minutes": 399
      },
      {
        "station": "Hillsdale",
        "time": "6:42 AM",
        "minutes": 402
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "6:45 AM",
        "minutes": 405
      },
      {
        "station": "San Mateo",
        "time": "6:47 AM",
        "minutes": 407
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "6:50 AM",
        "minutes": 410
      },
      {
        "station": "Millbrae",
        "time": "6:54 AM",
        "minutes": 414
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "6:57 AM",
        "minutes": 417
      },
      {
        "station": "S. San Francisco",
        "time": "7:00 AM",
        "minutes": 420
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "7:05 AM",
        "minutes": 425
      },
      {
        "station": "22 Street",
        "time": "7:10 AM",
        "minutes": 430
      },
      {
        "station": "San Francisco",
        "time": "7:16 AM",
        "minutes": 436
      },
      {
        "station": "8XX South County Connector",
        "time": "6:43 AM",
        "minutes": 403
      }
    ]
  },
  {
    "trainNum": "503",
    "type": "Express",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "6:22 AM",
        "minutes": 382
      },
      {
        "station": "Sunnyvale",
        "time": "6:32 AM",
        "minutes": 392
      },
      {
        "station": "Mountain View",
        "time": "6:36 AM",
        "minutes": 396
      },
      {
        "station": "Palo Alto",
        "time": "6:43 AM",
        "minutes": 403
      },
      {
        "station": "Redwood City",
        "time": "6:49 AM",
        "minutes": 409
      },
      {
        "station": "Hillsdale",
        "time": "6:56 AM",
        "minutes": 416
      },
      {
        "station": "San Mateo",
        "time": "6:59 AM",
        "minutes": 419
      },
      {
        "station": "Millbrae",
        "time": "7:04 AM",
        "minutes": 424
      },
      {
        "station": "S. San Francisco",
        "time": "7:09 AM",
        "minutes": 429
      },
      {
        "station": "22 Street",
        "time": "7:16 AM",
        "minutes": 436
      },
      {
        "station": "San Francisco",
        "time": "7:22 AM",
        "minutes": 442
      }
    ]
  },
  {
    "trainNum": "107",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "6:28 AM",
        "minutes": 388
      },
      {
        "station": "Santa Clara - - -",
        "time": "6:34 AM",
        "minutes": 394
      },
      {
        "station": "Lawrence - - -",
        "time": "6:39 AM",
        "minutes": 399
      },
      {
        "station": "Sunnyvale",
        "time": "6:42 AM",
        "minutes": 402
      },
      {
        "station": "Mountain View",
        "time": "6:46 AM",
        "minutes": 406
      },
      {
        "station": "San Antonio - - -",
        "time": "6:49 AM",
        "minutes": 409
      },
      {
        "station": "California Avenue - - -",
        "time": "6:52 AM",
        "minutes": 412
      },
      {
        "station": "Palo Alto",
        "time": "6:55 AM",
        "minutes": 415
      },
      {
        "station": "Menlo Park - - -",
        "time": "6:58 AM",
        "minutes": 418
      },
      {
        "station": "Redwood City",
        "time": "7:03 AM",
        "minutes": 423
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "7:07 AM",
        "minutes": 427
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "7:09 AM",
        "minutes": 429
      },
      {
        "station": "Hillsdale",
        "time": "7:12 AM",
        "minutes": 432
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "7:15 AM",
        "minutes": 435
      },
      {
        "station": "San Mateo",
        "time": "7:17 AM",
        "minutes": 437
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "7:20 AM",
        "minutes": 440
      },
      {
        "station": "Millbrae",
        "time": "7:24 AM",
        "minutes": 444
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "7:27 AM",
        "minutes": 447
      },
      {
        "station": "S. San Francisco",
        "time": "7:30 AM",
        "minutes": 450
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "7:35 AM",
        "minutes": 455
      },
      {
        "station": "22 Street",
        "time": "7:40 AM",
        "minutes": 460
      },
      {
        "station": "San Francisco",
        "time": "7:46 AM",
        "minutes": 466
      }
    ]
  },
  {
    "trainNum": "805",
    "type": "South County Connector",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Gilroy",
        "time": "5:52 AM",
        "minutes": 352
      },
      {
        "station": "San Martin",
        "time": "6:04 AM",
        "minutes": 364
      },
      {
        "station": "Morgan Hill",
        "time": "6:10 AM",
        "minutes": 370
      },
      {
        "station": "Blossom Hill",
        "time": "6:23 AM",
        "minutes": 383
      },
      {
        "station": "Capitol",
        "time": "6:29 AM",
        "minutes": 389
      },
      {
        "station": "Tamien",
        "time": "6:35 AM",
        "minutes": 395
      },
      {
        "station": "San Jose Diridon",
        "time": "6:40 AM",
        "minutes": 400
      }
    ]
  },
  {
    "trainNum": "405",
    "type": "Limited",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "6:43 AM",
        "minutes": 403
      },
      {
        "station": "Santa Clara - - -",
        "time": "6:49 AM",
        "minutes": 409
      },
      {
        "station": "Lawrence - - -",
        "time": "6:54 AM",
        "minutes": 414
      },
      {
        "station": "Sunnyvale",
        "time": "6:57 AM",
        "minutes": 417
      },
      {
        "station": "Mountain View",
        "time": "7:01 AM",
        "minutes": 421
      },
      {
        "station": "San Antonio - - -",
        "time": "7:04 AM",
        "minutes": 424
      },
      {
        "station": "California Avenue - - -",
        "time": "7:07 AM",
        "minutes": 427
      },
      {
        "station": "Palo Alto",
        "time": "7:10 AM",
        "minutes": 430
      },
      {
        "station": "Menlo Park - - -",
        "time": "7:13 AM",
        "minutes": 433
      },
      {
        "station": "Redwood City",
        "time": "7:18 AM",
        "minutes": 438
      },
      {
        "station": "Hillsdale",
        "time": "7:25 AM",
        "minutes": 445
      },
      {
        "station": "San Mateo",
        "time": "7:28 AM",
        "minutes": 448
      },
      {
        "station": "Millbrae",
        "time": "7:33 AM",
        "minutes": 453
      },
      {
        "station": "S. San Francisco",
        "time": "7:39 AM",
        "minutes": 459
      },
      {
        "station": "22 Street",
        "time": "7:47 AM",
        "minutes": 467
      },
      {
        "station": "San Francisco",
        "time": "7:53 AM",
        "minutes": 473
      }
    ]
  },
  {
    "trainNum": "109",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "6:52 AM",
        "minutes": 412
      },
      {
        "station": "San Jose Diridon",
        "time": "6:58 AM",
        "minutes": 418
      },
      {
        "station": "Santa Clara - - -",
        "time": "7:04 AM",
        "minutes": 424
      },
      {
        "station": "Lawrence - - -",
        "time": "7:09 AM",
        "minutes": 429
      },
      {
        "station": "Sunnyvale",
        "time": "7:12 AM",
        "minutes": 432
      },
      {
        "station": "Mountain View",
        "time": "7:16 AM",
        "minutes": 436
      },
      {
        "station": "San Antonio - - -",
        "time": "7:19 AM",
        "minutes": 439
      },
      {
        "station": "California Avenue - - -",
        "time": "7:22 AM",
        "minutes": 442
      },
      {
        "station": "Palo Alto",
        "time": "7:25 AM",
        "minutes": 445
      },
      {
        "station": "Menlo Park - - -",
        "time": "7:28 AM",
        "minutes": 448
      },
      {
        "station": "Redwood City",
        "time": "7:33 AM",
        "minutes": 453
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "7:37 AM",
        "minutes": 457
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "7:39 AM",
        "minutes": 459
      },
      {
        "station": "Hillsdale",
        "time": "7:42 AM",
        "minutes": 462
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "7:45 AM",
        "minutes": 465
      },
      {
        "station": "San Mateo",
        "time": "7:47 AM",
        "minutes": 467
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "7:50 AM",
        "minutes": 470
      },
      {
        "station": "Millbrae",
        "time": "7:54 AM",
        "minutes": 474
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "7:57 AM",
        "minutes": 477
      },
      {
        "station": "S. San Francisco",
        "time": "8:00 AM",
        "minutes": 480
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "8:05 AM",
        "minutes": 485
      },
      {
        "station": "22 Street",
        "time": "8:10 AM",
        "minutes": 490
      },
      {
        "station": "San Francisco",
        "time": "8:16 AM",
        "minutes": 496
      }
    ]
  },
  {
    "trainNum": "807",
    "type": "South County Connector",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Gilroy",
        "time": "6:31 AM",
        "minutes": 391
      },
      {
        "station": "San Martin",
        "time": "6:43 AM",
        "minutes": 403
      },
      {
        "station": "Morgan Hill",
        "time": "6:49 AM",
        "minutes": 409
      },
      {
        "station": "Blossom Hill",
        "time": "7:02 AM",
        "minutes": 422
      },
      {
        "station": "Capitol",
        "time": "7:08 AM",
        "minutes": 428
      },
      {
        "station": "Tamien",
        "time": "7:14 AM",
        "minutes": 434
      },
      {
        "station": "San Jose Diridon",
        "time": "7:19 AM",
        "minutes": 439
      }
    ]
  },
  {
    "trainNum": "507",
    "type": "Express",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "7:22 AM",
        "minutes": 442
      },
      {
        "station": "Sunnyvale",
        "time": "7:32 AM",
        "minutes": 452
      },
      {
        "station": "Mountain View",
        "time": "7:36 AM",
        "minutes": 456
      },
      {
        "station": "Palo Alto",
        "time": "7:43 AM",
        "minutes": 463
      },
      {
        "station": "Redwood City",
        "time": "7:49 AM",
        "minutes": 469
      },
      {
        "station": "Hillsdale",
        "time": "7:56 AM",
        "minutes": 476
      },
      {
        "station": "San Mateo",
        "time": "7:59 AM",
        "minutes": 479
      },
      {
        "station": "Millbrae",
        "time": "8:04 AM",
        "minutes": 484
      },
      {
        "station": "S. San Francisco",
        "time": "8:09 AM",
        "minutes": 489
      },
      {
        "station": "22 Street",
        "time": "8:16 AM",
        "minutes": 496
      },
      {
        "station": "San Francisco",
        "time": "8:22 AM",
        "minutes": 502
      }
    ]
  },
  {
    "trainNum": "111",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "7:28 AM",
        "minutes": 448
      },
      {
        "station": "Santa Clara - - -",
        "time": "7:34 AM",
        "minutes": 454
      },
      {
        "station": "Lawrence - - -",
        "time": "7:39 AM",
        "minutes": 459
      },
      {
        "station": "Sunnyvale",
        "time": "7:42 AM",
        "minutes": 462
      },
      {
        "station": "Mountain View",
        "time": "7:46 AM",
        "minutes": 466
      },
      {
        "station": "San Antonio - - -",
        "time": "7:49 AM",
        "minutes": 469
      },
      {
        "station": "California Avenue - - -",
        "time": "7:52 AM",
        "minutes": 472
      },
      {
        "station": "Palo Alto",
        "time": "7:55 AM",
        "minutes": 475
      },
      {
        "station": "Menlo Park - - -",
        "time": "7:58 AM",
        "minutes": 478
      },
      {
        "station": "Redwood City",
        "time": "8:03 AM",
        "minutes": 483
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "8:07 AM",
        "minutes": 487
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "8:09 AM",
        "minutes": 489
      },
      {
        "station": "Hillsdale",
        "time": "8:12 AM",
        "minutes": 492
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "8:15 AM",
        "minutes": 495
      },
      {
        "station": "San Mateo",
        "time": "8:17 AM",
        "minutes": 497
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "8:20 AM",
        "minutes": 500
      },
      {
        "station": "Millbrae",
        "time": "8:24 AM",
        "minutes": 504
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "8:27 AM",
        "minutes": 507
      },
      {
        "station": "S. San Francisco",
        "time": "8:30 AM",
        "minutes": 510
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "8:35 AM",
        "minutes": 515
      },
      {
        "station": "22 Street",
        "time": "8:40 AM",
        "minutes": 520
      },
      {
        "station": "San Francisco",
        "time": "8:46 AM",
        "minutes": 526
      }
    ]
  },
  {
    "trainNum": "809",
    "type": "South County Connector",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Gilroy",
        "time": "6:52 AM",
        "minutes": 412
      },
      {
        "station": "San Martin",
        "time": "7:04 AM",
        "minutes": 424
      },
      {
        "station": "Morgan Hill",
        "time": "7:10 AM",
        "minutes": 430
      },
      {
        "station": "Blossom Hill",
        "time": "7:23 AM",
        "minutes": 443
      },
      {
        "station": "Capitol",
        "time": "7:29 AM",
        "minutes": 449
      },
      {
        "station": "Tamien",
        "time": "7:35 AM",
        "minutes": 455
      },
      {
        "station": "San Jose Diridon",
        "time": "7:40 AM",
        "minutes": 460
      }
    ]
  },
  {
    "trainNum": "409",
    "type": "Limited",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "7:43 AM",
        "minutes": 463
      },
      {
        "station": "Santa Clara - - -",
        "time": "7:49 AM",
        "minutes": 469
      },
      {
        "station": "Lawrence - - -",
        "time": "7:54 AM",
        "minutes": 474
      },
      {
        "station": "Sunnyvale",
        "time": "7:57 AM",
        "minutes": 477
      },
      {
        "station": "Mountain View",
        "time": "8:01 AM",
        "minutes": 481
      },
      {
        "station": "San Antonio - - -",
        "time": "8:04 AM",
        "minutes": 484
      },
      {
        "station": "California Avenue - - -",
        "time": "8:07 AM",
        "minutes": 487
      },
      {
        "station": "Palo Alto",
        "time": "8:10 AM",
        "minutes": 490
      },
      {
        "station": "Menlo Park - - -",
        "time": "8:13 AM",
        "minutes": 493
      },
      {
        "station": "Redwood City",
        "time": "8:18 AM",
        "minutes": 498
      },
      {
        "station": "Hillsdale",
        "time": "8:25 AM",
        "minutes": 505
      },
      {
        "station": "San Mateo",
        "time": "8:28 AM",
        "minutes": 508
      },
      {
        "station": "Millbrae",
        "time": "8:33 AM",
        "minutes": 513
      },
      {
        "station": "S. San Francisco",
        "time": "8:39 AM",
        "minutes": 519
      },
      {
        "station": "22 Street",
        "time": "8:47 AM",
        "minutes": 527
      },
      {
        "station": "San Francisco",
        "time": "8:53 AM",
        "minutes": 533
      }
    ]
  },
  {
    "trainNum": "113",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "7:47 AM",
        "minutes": 467
      },
      {
        "station": "San Jose Diridon",
        "time": "7:53 AM",
        "minutes": 473
      },
      {
        "station": "College Park - - - - - - - - - - - - - - - - - - - - - - -",
        "time": "8:01 AM",
        "minutes": 481
      },
      {
        "station": "Santa Clara - - -",
        "time": "8:04 AM",
        "minutes": 484
      },
      {
        "station": "Lawrence - - -",
        "time": "8:09 AM",
        "minutes": 489
      },
      {
        "station": "Sunnyvale",
        "time": "8:12 AM",
        "minutes": 492
      },
      {
        "station": "Mountain View",
        "time": "8:16 AM",
        "minutes": 496
      },
      {
        "station": "San Antonio - - -",
        "time": "8:19 AM",
        "minutes": 499
      },
      {
        "station": "California Avenue - - -",
        "time": "8:22 AM",
        "minutes": 502
      },
      {
        "station": "Palo Alto",
        "time": "8:25 AM",
        "minutes": 505
      },
      {
        "station": "Menlo Park - - -",
        "time": "8:28 AM",
        "minutes": 508
      },
      {
        "station": "Redwood City",
        "time": "8:34 AM",
        "minutes": 514
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "8:37 AM",
        "minutes": 517
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "8:39 AM",
        "minutes": 519
      },
      {
        "station": "Hillsdale",
        "time": "8:43 AM",
        "minutes": 523
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "8:45 AM",
        "minutes": 525
      },
      {
        "station": "San Mateo",
        "time": "8:47 AM",
        "minutes": 527
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "8:50 AM",
        "minutes": 530
      },
      {
        "station": "Millbrae",
        "time": "8:54 AM",
        "minutes": 534
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "8:57 AM",
        "minutes": 537
      },
      {
        "station": "S. San Francisco",
        "time": "9:00 AM",
        "minutes": 540
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "9:05 AM",
        "minutes": 545
      },
      {
        "station": "22 Street",
        "time": "9:10 AM",
        "minutes": 550
      },
      {
        "station": "San Francisco",
        "time": "9:16 AM",
        "minutes": 556
      }
    ]
  },
  {
    "trainNum": "811",
    "type": "South County Connector",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Gilroy",
        "time": "7:31 AM",
        "minutes": 451
      },
      {
        "station": "San Martin",
        "time": "7:43 AM",
        "minutes": 463
      },
      {
        "station": "Morgan Hill",
        "time": "7:49 AM",
        "minutes": 469
      },
      {
        "station": "Blossom Hill",
        "time": "8:02 AM",
        "minutes": 482
      },
      {
        "station": "Capitol",
        "time": "8:08 AM",
        "minutes": 488
      },
      {
        "station": "Tamien",
        "time": "8:14 AM",
        "minutes": 494
      },
      {
        "station": "San Jose Diridon",
        "time": "8:19 AM",
        "minutes": 499
      }
    ]
  },
  {
    "trainNum": "511",
    "type": "Express",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "8:22 AM",
        "minutes": 502
      },
      {
        "station": "Sunnyvale",
        "time": "8:32 AM",
        "minutes": 512
      },
      {
        "station": "Mountain View",
        "time": "8:36 AM",
        "minutes": 516
      },
      {
        "station": "Palo Alto",
        "time": "8:43 AM",
        "minutes": 523
      },
      {
        "station": "Redwood City",
        "time": "8:49 AM",
        "minutes": 529
      },
      {
        "station": "Hillsdale",
        "time": "8:56 AM",
        "minutes": 536
      },
      {
        "station": "San Mateo",
        "time": "8:59 AM",
        "minutes": 539
      },
      {
        "station": "Millbrae",
        "time": "9:04 AM",
        "minutes": 544
      },
      {
        "station": "S. San Francisco",
        "time": "9:09 AM",
        "minutes": 549
      },
      {
        "station": "22 Street",
        "time": "9:16 AM",
        "minutes": 556
      },
      {
        "station": "San Francisco",
        "time": "9:22 AM",
        "minutes": 562
      }
    ]
  },
  {
    "trainNum": "115",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "8:28 AM",
        "minutes": 508
      },
      {
        "station": "Santa Clara - - -",
        "time": "8:34 AM",
        "minutes": 514
      },
      {
        "station": "Lawrence - - -",
        "time": "8:39 AM",
        "minutes": 519
      },
      {
        "station": "Sunnyvale",
        "time": "8:42 AM",
        "minutes": 522
      },
      {
        "station": "Mountain View",
        "time": "8:46 AM",
        "minutes": 526
      },
      {
        "station": "San Antonio - - -",
        "time": "8:49 AM",
        "minutes": 529
      },
      {
        "station": "California Avenue - - -",
        "time": "8:52 AM",
        "minutes": 532
      },
      {
        "station": "Palo Alto",
        "time": "8:55 AM",
        "minutes": 535
      },
      {
        "station": "Menlo Park - - -",
        "time": "8:58 AM",
        "minutes": 538
      },
      {
        "station": "Redwood City",
        "time": "9:03 AM",
        "minutes": 543
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "9:07 AM",
        "minutes": 547
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "9:09 AM",
        "minutes": 549
      },
      {
        "station": "Hillsdale",
        "time": "9:12 AM",
        "minutes": 552
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "9:15 AM",
        "minutes": 555
      },
      {
        "station": "San Mateo",
        "time": "9:17 AM",
        "minutes": 557
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "9:20 AM",
        "minutes": 560
      },
      {
        "station": "Millbrae",
        "time": "9:24 AM",
        "minutes": 564
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "9:27 AM",
        "minutes": 567
      },
      {
        "station": "S. San Francisco",
        "time": "9:30 AM",
        "minutes": 570
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "9:35 AM",
        "minutes": 575
      },
      {
        "station": "22 Street",
        "time": "9:40 AM",
        "minutes": 580
      },
      {
        "station": "San Francisco",
        "time": "9:46 AM",
        "minutes": 586
      }
    ]
  },
  {
    "trainNum": "413",
    "type": "Limited",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "8:43 AM",
        "minutes": 523
      },
      {
        "station": "Santa Clara - - -",
        "time": "8:49 AM",
        "minutes": 529
      },
      {
        "station": "Lawrence - - -",
        "time": "8:54 AM",
        "minutes": 534
      },
      {
        "station": "Sunnyvale",
        "time": "8:57 AM",
        "minutes": 537
      },
      {
        "station": "Mountain View",
        "time": "9:01 AM",
        "minutes": 541
      },
      {
        "station": "San Antonio - - -",
        "time": "9:04 AM",
        "minutes": 544
      },
      {
        "station": "California Avenue - - -",
        "time": "9:07 AM",
        "minutes": 547
      },
      {
        "station": "Palo Alto",
        "time": "9:10 AM",
        "minutes": 550
      },
      {
        "station": "Menlo Park - - -",
        "time": "9:13 AM",
        "minutes": 553
      },
      {
        "station": "Redwood City",
        "time": "9:18 AM",
        "minutes": 558
      },
      {
        "station": "Hillsdale",
        "time": "9:25 AM",
        "minutes": 565
      },
      {
        "station": "San Mateo",
        "time": "9:28 AM",
        "minutes": 568
      },
      {
        "station": "Millbrae",
        "time": "9:33 AM",
        "minutes": 573
      },
      {
        "station": "S. San Francisco",
        "time": "9:39 AM",
        "minutes": 579
      },
      {
        "station": "22 Street",
        "time": "9:47 AM",
        "minutes": 587
      },
      {
        "station": "San Francisco",
        "time": "9:53 AM",
        "minutes": 593
      }
    ]
  },
  {
    "trainNum": "117",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "8:52 AM",
        "minutes": 532
      },
      {
        "station": "San Jose Diridon",
        "time": "8:58 AM",
        "minutes": 538
      },
      {
        "station": "Santa Clara - - -",
        "time": "9:04 AM",
        "minutes": 544
      },
      {
        "station": "Lawrence - - -",
        "time": "9:09 AM",
        "minutes": 549
      },
      {
        "station": "Sunnyvale",
        "time": "9:12 AM",
        "minutes": 552
      },
      {
        "station": "Mountain View",
        "time": "9:16 AM",
        "minutes": 556
      },
      {
        "station": "San Antonio - - -",
        "time": "9:19 AM",
        "minutes": 559
      },
      {
        "station": "California Avenue - - -",
        "time": "9:22 AM",
        "minutes": 562
      },
      {
        "station": "Palo Alto",
        "time": "9:25 AM",
        "minutes": 565
      },
      {
        "station": "Menlo Park - - -",
        "time": "9:28 AM",
        "minutes": 568
      },
      {
        "station": "Redwood City",
        "time": "9:33 AM",
        "minutes": 573
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "9:37 AM",
        "minutes": 577
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "9:39 AM",
        "minutes": 579
      },
      {
        "station": "Hillsdale",
        "time": "9:42 AM",
        "minutes": 582
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "9:45 AM",
        "minutes": 585
      },
      {
        "station": "San Mateo",
        "time": "9:47 AM",
        "minutes": 587
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "9:50 AM",
        "minutes": 590
      },
      {
        "station": "Millbrae",
        "time": "9:54 AM",
        "minutes": 594
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "9:57 AM",
        "minutes": 597
      },
      {
        "station": "S. San Francisco",
        "time": "10:00 AM",
        "minutes": 600
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "10:05 AM",
        "minutes": 605
      },
      {
        "station": "22 Street",
        "time": "10:10 AM",
        "minutes": 610
      },
      {
        "station": "San Francisco",
        "time": "10:16 AM",
        "minutes": 616
      }
    ]
  },
  {
    "trainNum": "119",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "9:28 AM",
        "minutes": 568
      },
      {
        "station": "Santa Clara - - -",
        "time": "9:34 AM",
        "minutes": 574
      },
      {
        "station": "Lawrence - - -",
        "time": "9:39 AM",
        "minutes": 579
      },
      {
        "station": "Sunnyvale",
        "time": "9:42 AM",
        "minutes": 582
      },
      {
        "station": "Mountain View",
        "time": "9:46 AM",
        "minutes": 586
      },
      {
        "station": "San Antonio - - -",
        "time": "9:49 AM",
        "minutes": 589
      },
      {
        "station": "California Avenue - - -",
        "time": "9:52 AM",
        "minutes": 592
      },
      {
        "station": "Palo Alto",
        "time": "9:55 AM",
        "minutes": 595
      },
      {
        "station": "Menlo Park - - -",
        "time": "9:58 AM",
        "minutes": 598
      },
      {
        "station": "Redwood City",
        "time": "10:03 AM",
        "minutes": 603
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "10:07 AM",
        "minutes": 607
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "10:09 AM",
        "minutes": 609
      },
      {
        "station": "Hillsdale",
        "time": "10:12 AM",
        "minutes": 612
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "10:15 AM",
        "minutes": 615
      },
      {
        "station": "San Mateo",
        "time": "10:17 AM",
        "minutes": 617
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "10:20 AM",
        "minutes": 620
      },
      {
        "station": "Millbrae",
        "time": "10:24 AM",
        "minutes": 624
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "10:27 AM",
        "minutes": 627
      },
      {
        "station": "S. San Francisco",
        "time": "10:30 AM",
        "minutes": 630
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "10:35 AM",
        "minutes": 635
      },
      {
        "station": "22 Street",
        "time": "10:40 AM",
        "minutes": 640
      },
      {
        "station": "San Francisco",
        "time": "10:46 AM",
        "minutes": 646
      }
    ]
  },
  {
    "trainNum": "121",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "9:52 AM",
        "minutes": 592
      },
      {
        "station": "San Jose Diridon",
        "time": "9:58 AM",
        "minutes": 598
      },
      {
        "station": "Santa Clara - - -",
        "time": "10:04 AM",
        "minutes": 604
      },
      {
        "station": "Lawrence - - -",
        "time": "10:09 AM",
        "minutes": 609
      },
      {
        "station": "Sunnyvale",
        "time": "10:12 AM",
        "minutes": 612
      },
      {
        "station": "Mountain View",
        "time": "10:16 AM",
        "minutes": 616
      },
      {
        "station": "San Antonio - - -",
        "time": "10:19 AM",
        "minutes": 619
      },
      {
        "station": "California Avenue - - -",
        "time": "10:22 AM",
        "minutes": 622
      },
      {
        "station": "Palo Alto",
        "time": "10:25 AM",
        "minutes": 625
      },
      {
        "station": "Menlo Park - - -",
        "time": "10:28 AM",
        "minutes": 628
      },
      {
        "station": "Redwood City",
        "time": "10:33 AM",
        "minutes": 633
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "10:37 AM",
        "minutes": 637
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "10:39 AM",
        "minutes": 639
      },
      {
        "station": "Hillsdale",
        "time": "10:42 AM",
        "minutes": 642
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "10:45 AM",
        "minutes": 645
      },
      {
        "station": "San Mateo",
        "time": "10:47 AM",
        "minutes": 647
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "10:50 AM",
        "minutes": 650
      },
      {
        "station": "Millbrae",
        "time": "10:54 AM",
        "minutes": 654
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "10:57 AM",
        "minutes": 657
      },
      {
        "station": "S. San Francisco",
        "time": "11:00 AM",
        "minutes": 660
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "11:05 AM",
        "minutes": 665
      },
      {
        "station": "22 Street",
        "time": "11:10 AM",
        "minutes": 670
      },
      {
        "station": "San Francisco",
        "time": "11:16 AM",
        "minutes": 676
      }
    ]
  },
  {
    "trainNum": "123",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "10:28 AM",
        "minutes": 628
      },
      {
        "station": "Santa Clara - - -",
        "time": "10:34 AM",
        "minutes": 634
      },
      {
        "station": "Lawrence - - -",
        "time": "10:39 AM",
        "minutes": 639
      },
      {
        "station": "Sunnyvale",
        "time": "10:42 AM",
        "minutes": 642
      },
      {
        "station": "Mountain View",
        "time": "10:46 AM",
        "minutes": 646
      },
      {
        "station": "San Antonio - - -",
        "time": "10:49 AM",
        "minutes": 649
      },
      {
        "station": "California Avenue - - -",
        "time": "10:52 AM",
        "minutes": 652
      },
      {
        "station": "Palo Alto",
        "time": "10:55 AM",
        "minutes": 655
      },
      {
        "station": "Menlo Park - - -",
        "time": "10:58 AM",
        "minutes": 658
      },
      {
        "station": "Redwood City",
        "time": "11:03 AM",
        "minutes": 663
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "11:07 AM",
        "minutes": 667
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "11:09 AM",
        "minutes": 669
      },
      {
        "station": "Hillsdale",
        "time": "11:12 AM",
        "minutes": 672
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "11:15 AM",
        "minutes": 675
      },
      {
        "station": "San Mateo",
        "time": "11:17 AM",
        "minutes": 677
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "11:20 AM",
        "minutes": 680
      },
      {
        "station": "Millbrae",
        "time": "11:24 AM",
        "minutes": 684
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "11:27 AM",
        "minutes": 687
      },
      {
        "station": "S. San Francisco",
        "time": "11:30 AM",
        "minutes": 690
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "11:35 AM",
        "minutes": 695
      },
      {
        "station": "22 Street",
        "time": "11:40 AM",
        "minutes": 700
      },
      {
        "station": "San Francisco",
        "time": "11:46 AM",
        "minutes": 706
      }
    ]
  },
  {
    "trainNum": "125",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "10:52 AM",
        "minutes": 652
      },
      {
        "station": "San Jose Diridon",
        "time": "10:58 AM",
        "minutes": 658
      },
      {
        "station": "Santa Clara - - -",
        "time": "11:04 AM",
        "minutes": 664
      },
      {
        "station": "Lawrence - - -",
        "time": "11:09 AM",
        "minutes": 669
      },
      {
        "station": "Sunnyvale",
        "time": "11:12 AM",
        "minutes": 672
      },
      {
        "station": "Mountain View",
        "time": "11:16 AM",
        "minutes": 676
      },
      {
        "station": "San Antonio - - -",
        "time": "11:19 AM",
        "minutes": 679
      },
      {
        "station": "California Avenue - - -",
        "time": "11:22 AM",
        "minutes": 682
      },
      {
        "station": "Palo Alto",
        "time": "11:25 AM",
        "minutes": 685
      },
      {
        "station": "Menlo Park - - -",
        "time": "11:28 AM",
        "minutes": 688
      },
      {
        "station": "Redwood City",
        "time": "11:33 AM",
        "minutes": 693
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "11:37 AM",
        "minutes": 697
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "11:39 AM",
        "minutes": 699
      },
      {
        "station": "Hillsdale",
        "time": "11:42 AM",
        "minutes": 702
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "11:45 AM",
        "minutes": 705
      },
      {
        "station": "San Mateo",
        "time": "11:47 AM",
        "minutes": 707
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "11:50 AM",
        "minutes": 710
      },
      {
        "station": "Millbrae",
        "time": "11:54 AM",
        "minutes": 714
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "11:57 AM",
        "minutes": 717
      },
      {
        "station": "S. San Francisco",
        "time": "12:00 PM",
        "minutes": 720
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "12:05 PM",
        "minutes": 725
      },
      {
        "station": "22 Street",
        "time": "12:10 PM",
        "minutes": 730
      },
      {
        "station": "San Francisco",
        "time": "12:16 PM",
        "minutes": 736
      }
    ]
  },
  {
    "trainNum": "127",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "11:28 AM",
        "minutes": 688
      },
      {
        "station": "Santa Clara - - -",
        "time": "11:34 AM",
        "minutes": 694
      },
      {
        "station": "Lawrence - - -",
        "time": "11:39 AM",
        "minutes": 699
      },
      {
        "station": "Sunnyvale",
        "time": "11:42 AM",
        "minutes": 702
      },
      {
        "station": "Mountain View",
        "time": "11:46 AM",
        "minutes": 706
      },
      {
        "station": "San Antonio - - -",
        "time": "11:49 AM",
        "minutes": 709
      },
      {
        "station": "California Avenue - - -",
        "time": "11:52 AM",
        "minutes": 712
      },
      {
        "station": "Palo Alto",
        "time": "11:55 AM",
        "minutes": 715
      },
      {
        "station": "Menlo Park - - -",
        "time": "11:58 AM",
        "minutes": 718
      },
      {
        "station": "Redwood City",
        "time": "12:03 PM",
        "minutes": 723
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "12:07 PM",
        "minutes": 727
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "12:09 PM",
        "minutes": 729
      },
      {
        "station": "Hillsdale",
        "time": "12:12 PM",
        "minutes": 732
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "12:15 PM",
        "minutes": 735
      },
      {
        "station": "San Mateo",
        "time": "12:17 PM",
        "minutes": 737
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "12:20 PM",
        "minutes": 740
      },
      {
        "station": "Millbrae",
        "time": "12:24 PM",
        "minutes": 744
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "12:27 PM",
        "minutes": 747
      },
      {
        "station": "S. San Francisco",
        "time": "12:30 PM",
        "minutes": 750
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "12:35 PM",
        "minutes": 755
      },
      {
        "station": "22 Street",
        "time": "12:40 PM",
        "minutes": 760
      },
      {
        "station": "San Francisco",
        "time": "12:46 PM",
        "minutes": 766
      }
    ]
  },
  {
    "trainNum": "129",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "11:52 AM",
        "minutes": 712
      },
      {
        "station": "San Jose Diridon",
        "time": "11:58 AM",
        "minutes": 718
      },
      {
        "station": "Santa Clara - - -",
        "time": "12:04 PM",
        "minutes": 724
      },
      {
        "station": "Lawrence - - -",
        "time": "12:09 PM",
        "minutes": 729
      },
      {
        "station": "Sunnyvale",
        "time": "12:12 PM",
        "minutes": 732
      },
      {
        "station": "Mountain View",
        "time": "12:16 PM",
        "minutes": 736
      },
      {
        "station": "San Antonio - - -",
        "time": "12:19 PM",
        "minutes": 739
      },
      {
        "station": "California Avenue - - -",
        "time": "12:22 PM",
        "minutes": 742
      },
      {
        "station": "Palo Alto",
        "time": "12:25 PM",
        "minutes": 745
      },
      {
        "station": "Menlo Park - - -",
        "time": "12:28 PM",
        "minutes": 748
      },
      {
        "station": "Redwood City",
        "time": "12:33 PM",
        "minutes": 753
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "12:37 PM",
        "minutes": 757
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "12:39 PM",
        "minutes": 759
      },
      {
        "station": "Hillsdale",
        "time": "12:42 PM",
        "minutes": 762
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "12:45 PM",
        "minutes": 765
      },
      {
        "station": "San Mateo",
        "time": "12:47 PM",
        "minutes": 767
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "12:50 PM",
        "minutes": 770
      },
      {
        "station": "Millbrae",
        "time": "12:54 PM",
        "minutes": 774
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "12:57 PM",
        "minutes": 777
      },
      {
        "station": "S. San Francisco",
        "time": "1:00 PM",
        "minutes": 780
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "1:05 PM",
        "minutes": 785
      },
      {
        "station": "22 Street",
        "time": "1:10 PM",
        "minutes": 790
      },
      {
        "station": "San Francisco",
        "time": "1:16 PM",
        "minutes": 796
      }
    ]
  },
  {
    "trainNum": "131",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "12:28 PM",
        "minutes": 748
      },
      {
        "station": "Santa Clara - - -",
        "time": "12:34 PM",
        "minutes": 754
      },
      {
        "station": "Lawrence - - -",
        "time": "12:39 PM",
        "minutes": 759
      },
      {
        "station": "Sunnyvale",
        "time": "12:42 PM",
        "minutes": 762
      },
      {
        "station": "Mountain View",
        "time": "12:46 PM",
        "minutes": 766
      },
      {
        "station": "San Antonio - - -",
        "time": "12:49 PM",
        "minutes": 769
      },
      {
        "station": "California Avenue - - -",
        "time": "12:52 PM",
        "minutes": 772
      },
      {
        "station": "Palo Alto",
        "time": "12:55 PM",
        "minutes": 775
      },
      {
        "station": "Menlo Park - - -",
        "time": "12:58 PM",
        "minutes": 778
      },
      {
        "station": "Redwood City",
        "time": "1:03 PM",
        "minutes": 783
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "1:07 PM",
        "minutes": 787
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "1:09 PM",
        "minutes": 789
      },
      {
        "station": "Hillsdale",
        "time": "1:12 PM",
        "minutes": 792
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "1:15 PM",
        "minutes": 795
      },
      {
        "station": "San Mateo",
        "time": "1:17 PM",
        "minutes": 797
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "1:20 PM",
        "minutes": 800
      },
      {
        "station": "Millbrae",
        "time": "1:24 PM",
        "minutes": 804
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "1:27 PM",
        "minutes": 807
      },
      {
        "station": "S. San Francisco",
        "time": "1:30 PM",
        "minutes": 810
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "1:35 PM",
        "minutes": 815
      },
      {
        "station": "22 Street",
        "time": "1:40 PM",
        "minutes": 820
      },
      {
        "station": "San Francisco",
        "time": "1:46 PM",
        "minutes": 826
      }
    ]
  },
  {
    "trainNum": "133",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "12:52 PM",
        "minutes": 772
      },
      {
        "station": "San Jose Diridon",
        "time": "12:58 PM",
        "minutes": 778
      },
      {
        "station": "Santa Clara - - -",
        "time": "1:04 PM",
        "minutes": 784
      },
      {
        "station": "Lawrence - - -",
        "time": "1:09 PM",
        "minutes": 789
      },
      {
        "station": "Sunnyvale",
        "time": "1:12 PM",
        "minutes": 792
      },
      {
        "station": "Mountain View",
        "time": "1:16 PM",
        "minutes": 796
      },
      {
        "station": "San Antonio - - -",
        "time": "1:19 PM",
        "minutes": 799
      },
      {
        "station": "California Avenue - - -",
        "time": "1:22 PM",
        "minutes": 802
      },
      {
        "station": "Palo Alto",
        "time": "1:25 PM",
        "minutes": 805
      },
      {
        "station": "Menlo Park - - -",
        "time": "1:28 PM",
        "minutes": 808
      },
      {
        "station": "Redwood City",
        "time": "1:33 PM",
        "minutes": 813
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "1:37 PM",
        "minutes": 817
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "1:39 PM",
        "minutes": 819
      },
      {
        "station": "Hillsdale",
        "time": "1:42 PM",
        "minutes": 822
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "1:45 PM",
        "minutes": 825
      },
      {
        "station": "San Mateo",
        "time": "1:47 PM",
        "minutes": 827
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "1:50 PM",
        "minutes": 830
      },
      {
        "station": "Millbrae",
        "time": "1:54 PM",
        "minutes": 834
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "1:57 PM",
        "minutes": 837
      },
      {
        "station": "S. San Francisco",
        "time": "2:00 PM",
        "minutes": 840
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "2:05 PM",
        "minutes": 845
      },
      {
        "station": "22 Street",
        "time": "2:10 PM",
        "minutes": 850
      },
      {
        "station": "San Francisco",
        "time": "2:16 PM",
        "minutes": 856
      }
    ]
  },
  {
    "trainNum": "135",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "1:28 PM",
        "minutes": 808
      },
      {
        "station": "Santa Clara - - - -",
        "time": "1:34 PM",
        "minutes": 814
      },
      {
        "station": "Lawrence - - - -",
        "time": "1:39 PM",
        "minutes": 819
      },
      {
        "station": "Sunnyvale",
        "time": "1:42 PM",
        "minutes": 822
      },
      {
        "station": "Mountain View",
        "time": "1:46 PM",
        "minutes": 826
      },
      {
        "station": "San Antonio - - - -",
        "time": "1:49 PM",
        "minutes": 829
      },
      {
        "station": "California Avenue - - - -",
        "time": "1:52 PM",
        "minutes": 832
      },
      {
        "station": "Palo Alto",
        "time": "1:55 PM",
        "minutes": 835
      },
      {
        "station": "Menlo Park - - - -",
        "time": "1:58 PM",
        "minutes": 838
      },
      {
        "station": "Redwood City",
        "time": "2:03 PM",
        "minutes": 843
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "2:07 PM",
        "minutes": 847
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "2:09 PM",
        "minutes": 849
      },
      {
        "station": "Hillsdale",
        "time": "2:12 PM",
        "minutes": 852
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "2:15 PM",
        "minutes": 855
      },
      {
        "station": "San Mateo",
        "time": "2:17 PM",
        "minutes": 857
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "2:20 PM",
        "minutes": 860
      },
      {
        "station": "Millbrae",
        "time": "2:24 PM",
        "minutes": 864
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "2:27 PM",
        "minutes": 867
      },
      {
        "station": "S. San Francisco",
        "time": "2:30 PM",
        "minutes": 870
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "2:35 PM",
        "minutes": 875
      },
      {
        "station": "22 Street",
        "time": "2:40 PM",
        "minutes": 880
      },
      {
        "station": "San Francisco",
        "time": "2:46 PM",
        "minutes": 886
      }
    ]
  },
  {
    "trainNum": "137",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "1:52 PM",
        "minutes": 832
      },
      {
        "station": "San Jose Diridon",
        "time": "1:58 PM",
        "minutes": 838
      },
      {
        "station": "Santa Clara - - - -",
        "time": "2:04 PM",
        "minutes": 844
      },
      {
        "station": "Lawrence - - - -",
        "time": "2:09 PM",
        "minutes": 849
      },
      {
        "station": "Sunnyvale",
        "time": "2:12 PM",
        "minutes": 852
      },
      {
        "station": "Mountain View",
        "time": "2:16 PM",
        "minutes": 856
      },
      {
        "station": "San Antonio - - - -",
        "time": "2:19 PM",
        "minutes": 859
      },
      {
        "station": "California Avenue - - - -",
        "time": "2:22 PM",
        "minutes": 862
      },
      {
        "station": "Palo Alto",
        "time": "2:25 PM",
        "minutes": 865
      },
      {
        "station": "Menlo Park - - - -",
        "time": "2:28 PM",
        "minutes": 868
      },
      {
        "station": "Redwood City",
        "time": "2:33 PM",
        "minutes": 873
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "2:37 PM",
        "minutes": 877
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "2:39 PM",
        "minutes": 879
      },
      {
        "station": "Hillsdale",
        "time": "2:42 PM",
        "minutes": 882
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "2:45 PM",
        "minutes": 885
      },
      {
        "station": "San Mateo",
        "time": "2:47 PM",
        "minutes": 887
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "2:50 PM",
        "minutes": 890
      },
      {
        "station": "Millbrae",
        "time": "2:54 PM",
        "minutes": 894
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "2:57 PM",
        "minutes": 897
      },
      {
        "station": "S. San Francisco",
        "time": "3:00 PM",
        "minutes": 900
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "3:05 PM",
        "minutes": 905
      },
      {
        "station": "22 Street",
        "time": "3:10 PM",
        "minutes": 910
      },
      {
        "station": "San Francisco",
        "time": "3:16 PM",
        "minutes": 916
      }
    ]
  },
  {
    "trainNum": "139",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "2:28 PM",
        "minutes": 868
      },
      {
        "station": "Santa Clara - - - -",
        "time": "2:34 PM",
        "minutes": 874
      },
      {
        "station": "Lawrence - - - -",
        "time": "2:39 PM",
        "minutes": 879
      },
      {
        "station": "Sunnyvale",
        "time": "2:42 PM",
        "minutes": 882
      },
      {
        "station": "Mountain View",
        "time": "2:46 PM",
        "minutes": 886
      },
      {
        "station": "San Antonio - - - -",
        "time": "2:49 PM",
        "minutes": 889
      },
      {
        "station": "California Avenue - - - -",
        "time": "2:52 PM",
        "minutes": 892
      },
      {
        "station": "Palo Alto",
        "time": "2:55 PM",
        "minutes": 895
      },
      {
        "station": "Menlo Park - - - -",
        "time": "2:58 PM",
        "minutes": 898
      },
      {
        "station": "Redwood City",
        "time": "3:03 PM",
        "minutes": 903
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "3:07 PM",
        "minutes": 907
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "3:09 PM",
        "minutes": 909
      },
      {
        "station": "Hillsdale",
        "time": "3:12 PM",
        "minutes": 912
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "3:15 PM",
        "minutes": 915
      },
      {
        "station": "San Mateo",
        "time": "3:17 PM",
        "minutes": 917
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "3:20 PM",
        "minutes": 920
      },
      {
        "station": "Millbrae",
        "time": "3:24 PM",
        "minutes": 924
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "3:27 PM",
        "minutes": 927
      },
      {
        "station": "S. San Francisco",
        "time": "3:30 PM",
        "minutes": 930
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "3:35 PM",
        "minutes": 935
      },
      {
        "station": "22 Street",
        "time": "3:40 PM",
        "minutes": 940
      },
      {
        "station": "San Francisco",
        "time": "3:46 PM",
        "minutes": 946
      }
    ]
  },
  {
    "trainNum": "141",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "2:52 PM",
        "minutes": 892
      },
      {
        "station": "San Jose Diridon",
        "time": "2:58 PM",
        "minutes": 898
      },
      {
        "station": "Santa Clara - - - -",
        "time": "3:04 PM",
        "minutes": 904
      },
      {
        "station": "Lawrence - - - -",
        "time": "3:09 PM",
        "minutes": 909
      },
      {
        "station": "Sunnyvale",
        "time": "3:12 PM",
        "minutes": 912
      },
      {
        "station": "Mountain View",
        "time": "3:16 PM",
        "minutes": 916
      },
      {
        "station": "San Antonio - - - -",
        "time": "3:19 PM",
        "minutes": 919
      },
      {
        "station": "California Avenue - - - -",
        "time": "3:22 PM",
        "minutes": 922
      },
      {
        "station": "Palo Alto",
        "time": "3:25 PM",
        "minutes": 925
      },
      {
        "station": "Menlo Park - - - -",
        "time": "3:28 PM",
        "minutes": 928
      },
      {
        "station": "Redwood City",
        "time": "3:34 PM",
        "minutes": 934
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "3:37 PM",
        "minutes": 937
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "3:39 PM",
        "minutes": 939
      },
      {
        "station": "Hillsdale",
        "time": "3:43 PM",
        "minutes": 943
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "3:45 PM",
        "minutes": 945
      },
      {
        "station": "San Mateo",
        "time": "3:47 PM",
        "minutes": 947
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "3:50 PM",
        "minutes": 950
      },
      {
        "station": "Millbrae",
        "time": "3:54 PM",
        "minutes": 954
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "3:57 PM",
        "minutes": 957
      },
      {
        "station": "S. San Francisco",
        "time": "4:00 PM",
        "minutes": 960
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "4:05 PM",
        "minutes": 965
      },
      {
        "station": "22 Street",
        "time": "4:10 PM",
        "minutes": 970
      },
      {
        "station": "San Francisco",
        "time": "4:16 PM",
        "minutes": 976
      }
    ]
  },
  {
    "trainNum": "515",
    "type": "Express",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "3:22 PM",
        "minutes": 922
      },
      {
        "station": "Sunnyvale",
        "time": "3:32 PM",
        "minutes": 932
      },
      {
        "station": "Mountain View",
        "time": "3:36 PM",
        "minutes": 936
      },
      {
        "station": "Palo Alto",
        "time": "3:43 PM",
        "minutes": 943
      },
      {
        "station": "Redwood City",
        "time": "3:49 PM",
        "minutes": 949
      },
      {
        "station": "Hillsdale",
        "time": "3:56 PM",
        "minutes": 956
      },
      {
        "station": "San Mateo",
        "time": "3:59 PM",
        "minutes": 959
      },
      {
        "station": "Millbrae",
        "time": "4:04 PM",
        "minutes": 964
      },
      {
        "station": "S. San Francisco",
        "time": "4:09 PM",
        "minutes": 969
      },
      {
        "station": "22 Street",
        "time": "4:16 PM",
        "minutes": 976
      },
      {
        "station": "San Francisco",
        "time": "4:22 PM",
        "minutes": 982
      }
    ]
  },
  {
    "trainNum": "143",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "3:23 PM",
        "minutes": 923
      },
      {
        "station": "College Park - - - - - - - - - - - - - - - - - - - - - - - - - - -",
        "time": "3:31 PM",
        "minutes": 931
      },
      {
        "station": "Santa Clara - - - -",
        "time": "3:34 PM",
        "minutes": 934
      },
      {
        "station": "Lawrence - - - -",
        "time": "3:39 PM",
        "minutes": 939
      },
      {
        "station": "Sunnyvale",
        "time": "3:42 PM",
        "minutes": 942
      },
      {
        "station": "Mountain View",
        "time": "3:46 PM",
        "minutes": 946
      },
      {
        "station": "San Antonio - - - -",
        "time": "3:49 PM",
        "minutes": 949
      },
      {
        "station": "California Avenue - - - -",
        "time": "3:52 PM",
        "minutes": 952
      },
      {
        "station": "Palo Alto",
        "time": "3:55 PM",
        "minutes": 955
      },
      {
        "station": "Menlo Park - - - -",
        "time": "3:58 PM",
        "minutes": 958
      },
      {
        "station": "Redwood City",
        "time": "4:03 PM",
        "minutes": 963
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "4:07 PM",
        "minutes": 967
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "4:09 PM",
        "minutes": 969
      },
      {
        "station": "Hillsdale",
        "time": "4:12 PM",
        "minutes": 972
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "4:15 PM",
        "minutes": 975
      },
      {
        "station": "San Mateo",
        "time": "4:17 PM",
        "minutes": 977
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "4:20 PM",
        "minutes": 980
      },
      {
        "station": "Millbrae",
        "time": "4:24 PM",
        "minutes": 984
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "4:27 PM",
        "minutes": 987
      },
      {
        "station": "S. San Francisco",
        "time": "4:30 PM",
        "minutes": 990
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "4:35 PM",
        "minutes": 995
      },
      {
        "station": "22 Street",
        "time": "4:40 PM",
        "minutes": 1000
      },
      {
        "station": "San Francisco",
        "time": "4:46 PM",
        "minutes": 1006
      }
    ]
  },
  {
    "trainNum": "417",
    "type": "Limited",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "3:43 PM",
        "minutes": 943
      },
      {
        "station": "Santa Clara - - - -",
        "time": "3:49 PM",
        "minutes": 949
      },
      {
        "station": "Lawrence - - - -",
        "time": "3:54 PM",
        "minutes": 954
      },
      {
        "station": "Sunnyvale",
        "time": "3:57 PM",
        "minutes": 957
      },
      {
        "station": "Mountain View",
        "time": "4:01 PM",
        "minutes": 961
      },
      {
        "station": "San Antonio - - - -",
        "time": "4:04 PM",
        "minutes": 964
      },
      {
        "station": "California Avenue - - - -",
        "time": "4:07 PM",
        "minutes": 967
      },
      {
        "station": "Palo Alto",
        "time": "4:10 PM",
        "minutes": 970
      },
      {
        "station": "Menlo Park - - - -",
        "time": "4:13 PM",
        "minutes": 973
      },
      {
        "station": "Redwood City",
        "time": "4:18 PM",
        "minutes": 978
      },
      {
        "station": "Hillsdale",
        "time": "4:25 PM",
        "minutes": 985
      },
      {
        "station": "San Mateo",
        "time": "4:28 PM",
        "minutes": 988
      },
      {
        "station": "Millbrae",
        "time": "4:33 PM",
        "minutes": 993
      },
      {
        "station": "S. San Francisco",
        "time": "4:39 PM",
        "minutes": 999
      },
      {
        "station": "22 Street",
        "time": "4:47 PM",
        "minutes": 1007
      },
      {
        "station": "San Francisco",
        "time": "4:53 PM",
        "minutes": 1013
      }
    ]
  },
  {
    "trainNum": "145",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "3:52 PM",
        "minutes": 952
      },
      {
        "station": "San Jose Diridon",
        "time": "3:58 PM",
        "minutes": 958
      },
      {
        "station": "Santa Clara - - - -",
        "time": "4:04 PM",
        "minutes": 964
      },
      {
        "station": "Lawrence - - - -",
        "time": "4:09 PM",
        "minutes": 969
      },
      {
        "station": "Sunnyvale",
        "time": "4:12 PM",
        "minutes": 972
      },
      {
        "station": "Mountain View",
        "time": "4:16 PM",
        "minutes": 976
      },
      {
        "station": "San Antonio - - - -",
        "time": "4:19 PM",
        "minutes": 979
      },
      {
        "station": "California Avenue - - - -",
        "time": "4:22 PM",
        "minutes": 982
      },
      {
        "station": "Palo Alto",
        "time": "4:25 PM",
        "minutes": 985
      },
      {
        "station": "Menlo Park - - - -",
        "time": "4:28 PM",
        "minutes": 988
      },
      {
        "station": "Redwood City",
        "time": "4:33 PM",
        "minutes": 993
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "4:37 PM",
        "minutes": 997
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "4:39 PM",
        "minutes": 999
      },
      {
        "station": "Hillsdale",
        "time": "4:42 PM",
        "minutes": 1002
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "4:45 PM",
        "minutes": 1005
      },
      {
        "station": "San Mateo",
        "time": "4:47 PM",
        "minutes": 1007
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "4:50 PM",
        "minutes": 1010
      },
      {
        "station": "Millbrae",
        "time": "4:54 PM",
        "minutes": 1014
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "4:57 PM",
        "minutes": 1017
      },
      {
        "station": "S. San Francisco",
        "time": "5:00 PM",
        "minutes": 1020
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "5:05 PM",
        "minutes": 1025
      },
      {
        "station": "22 Street",
        "time": "5:10 PM",
        "minutes": 1030
      },
      {
        "station": "San Francisco",
        "time": "5:16 PM",
        "minutes": 1036
      }
    ]
  },
  {
    "trainNum": "519",
    "type": "Express",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "4:22 PM",
        "minutes": 982
      },
      {
        "station": "Sunnyvale",
        "time": "4:32 PM",
        "minutes": 992
      },
      {
        "station": "Mountain View",
        "time": "4:36 PM",
        "minutes": 996
      },
      {
        "station": "Palo Alto",
        "time": "4:43 PM",
        "minutes": 1003
      },
      {
        "station": "Redwood City",
        "time": "4:49 PM",
        "minutes": 1009
      },
      {
        "station": "Hillsdale",
        "time": "4:56 PM",
        "minutes": 1016
      },
      {
        "station": "San Mateo",
        "time": "4:59 PM",
        "minutes": 1019
      },
      {
        "station": "Millbrae",
        "time": "5:04 PM",
        "minutes": 1024
      },
      {
        "station": "S. San Francisco",
        "time": "5:09 PM",
        "minutes": 1029
      },
      {
        "station": "22 Street",
        "time": "5:16 PM",
        "minutes": 1036
      },
      {
        "station": "San Francisco",
        "time": "5:22 PM",
        "minutes": 1042
      }
    ]
  },
  {
    "trainNum": "147",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "4:28 PM",
        "minutes": 988
      },
      {
        "station": "Santa Clara - - - -",
        "time": "4:34 PM",
        "minutes": 994
      },
      {
        "station": "Lawrence - - - -",
        "time": "4:39 PM",
        "minutes": 999
      },
      {
        "station": "Sunnyvale",
        "time": "4:42 PM",
        "minutes": 1002
      },
      {
        "station": "Mountain View",
        "time": "4:46 PM",
        "minutes": 1006
      },
      {
        "station": "San Antonio - - - -",
        "time": "4:49 PM",
        "minutes": 1009
      },
      {
        "station": "California Avenue - - - -",
        "time": "4:52 PM",
        "minutes": 1012
      },
      {
        "station": "Palo Alto",
        "time": "4:55 PM",
        "minutes": 1015
      },
      {
        "station": "Menlo Park - - - -",
        "time": "4:58 PM",
        "minutes": 1018
      },
      {
        "station": "Redwood City",
        "time": "5:03 PM",
        "minutes": 1023
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "5:07 PM",
        "minutes": 1027
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "5:09 PM",
        "minutes": 1029
      },
      {
        "station": "Hillsdale",
        "time": "5:12 PM",
        "minutes": 1032
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "5:15 PM",
        "minutes": 1035
      },
      {
        "station": "San Mateo",
        "time": "5:17 PM",
        "minutes": 1037
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "5:20 PM",
        "minutes": 1040
      },
      {
        "station": "Millbrae",
        "time": "5:24 PM",
        "minutes": 1044
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "5:27 PM",
        "minutes": 1047
      },
      {
        "station": "S. San Francisco",
        "time": "5:30 PM",
        "minutes": 1050
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "5:35 PM",
        "minutes": 1055
      },
      {
        "station": "22 Street",
        "time": "5:40 PM",
        "minutes": 1060
      },
      {
        "station": "San Francisco",
        "time": "5:46 PM",
        "minutes": 1066
      }
    ]
  },
  {
    "trainNum": "421",
    "type": "Limited",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "4:43 PM",
        "minutes": 1003
      },
      {
        "station": "Santa Clara - - - -",
        "time": "4:49 PM",
        "minutes": 1009
      },
      {
        "station": "Lawrence - - - -",
        "time": "4:54 PM",
        "minutes": 1014
      },
      {
        "station": "Sunnyvale",
        "time": "4:57 PM",
        "minutes": 1017
      },
      {
        "station": "Mountain View",
        "time": "5:01 PM",
        "minutes": 1021
      },
      {
        "station": "San Antonio - - - -",
        "time": "5:04 PM",
        "minutes": 1024
      },
      {
        "station": "California Avenue - - - -",
        "time": "5:07 PM",
        "minutes": 1027
      },
      {
        "station": "Palo Alto",
        "time": "5:10 PM",
        "minutes": 1030
      },
      {
        "station": "Menlo Park - - - -",
        "time": "5:13 PM",
        "minutes": 1033
      },
      {
        "station": "Redwood City",
        "time": "5:18 PM",
        "minutes": 1038
      },
      {
        "station": "Hillsdale",
        "time": "5:25 PM",
        "minutes": 1045
      },
      {
        "station": "San Mateo",
        "time": "5:28 PM",
        "minutes": 1048
      },
      {
        "station": "Millbrae",
        "time": "5:33 PM",
        "minutes": 1053
      },
      {
        "station": "S. San Francisco",
        "time": "5:39 PM",
        "minutes": 1059
      },
      {
        "station": "22 Street",
        "time": "5:47 PM",
        "minutes": 1067
      },
      {
        "station": "San Francisco",
        "time": "5:53 PM",
        "minutes": 1073
      }
    ]
  },
  {
    "trainNum": "149",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "4:52 PM",
        "minutes": 1012
      },
      {
        "station": "San Jose Diridon",
        "time": "4:58 PM",
        "minutes": 1018
      },
      {
        "station": "Santa Clara - - - -",
        "time": "5:04 PM",
        "minutes": 1024
      },
      {
        "station": "Lawrence - - - -",
        "time": "5:09 PM",
        "minutes": 1029
      },
      {
        "station": "Sunnyvale",
        "time": "5:12 PM",
        "minutes": 1032
      },
      {
        "station": "Mountain View",
        "time": "5:16 PM",
        "minutes": 1036
      },
      {
        "station": "San Antonio - - - -",
        "time": "5:19 PM",
        "minutes": 1039
      },
      {
        "station": "California Avenue - - - -",
        "time": "5:22 PM",
        "minutes": 1042
      },
      {
        "station": "Palo Alto",
        "time": "5:25 PM",
        "minutes": 1045
      },
      {
        "station": "Menlo Park - - - -",
        "time": "5:28 PM",
        "minutes": 1048
      },
      {
        "station": "Redwood City",
        "time": "5:33 PM",
        "minutes": 1053
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "5:37 PM",
        "minutes": 1057
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "5:39 PM",
        "minutes": 1059
      },
      {
        "station": "Hillsdale",
        "time": "5:42 PM",
        "minutes": 1062
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "5:45 PM",
        "minutes": 1065
      },
      {
        "station": "San Mateo",
        "time": "5:47 PM",
        "minutes": 1067
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "5:50 PM",
        "minutes": 1070
      },
      {
        "station": "Millbrae",
        "time": "5:54 PM",
        "minutes": 1074
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "5:57 PM",
        "minutes": 1077
      },
      {
        "station": "S. San Francisco",
        "time": "6:00 PM",
        "minutes": 1080
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "6:05 PM",
        "minutes": 1085
      },
      {
        "station": "22 Street",
        "time": "6:10 PM",
        "minutes": 1090
      },
      {
        "station": "San Francisco",
        "time": "6:16 PM",
        "minutes": 1096
      }
    ]
  },
  {
    "trainNum": "523",
    "type": "Express",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "5:22 PM",
        "minutes": 1042
      },
      {
        "station": "Sunnyvale",
        "time": "5:32 PM",
        "minutes": 1052
      },
      {
        "station": "Mountain View",
        "time": "5:36 PM",
        "minutes": 1056
      },
      {
        "station": "Palo Alto",
        "time": "5:43 PM",
        "minutes": 1063
      },
      {
        "station": "Redwood City",
        "time": "5:49 PM",
        "minutes": 1069
      },
      {
        "station": "Hillsdale",
        "time": "5:56 PM",
        "minutes": 1076
      },
      {
        "station": "San Mateo",
        "time": "5:59 PM",
        "minutes": 1079
      },
      {
        "station": "Millbrae",
        "time": "6:04 PM",
        "minutes": 1084
      },
      {
        "station": "S. San Francisco",
        "time": "6:09 PM",
        "minutes": 1089
      },
      {
        "station": "22 Street",
        "time": "6:16 PM",
        "minutes": 1096
      },
      {
        "station": "San Francisco",
        "time": "6:22 PM",
        "minutes": 1102
      }
    ]
  },
  {
    "trainNum": "151",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "5:28 PM",
        "minutes": 1048
      },
      {
        "station": "Santa Clara - - - -",
        "time": "5:34 PM",
        "minutes": 1054
      },
      {
        "station": "Lawrence - - - -",
        "time": "5:39 PM",
        "minutes": 1059
      },
      {
        "station": "Sunnyvale",
        "time": "5:42 PM",
        "minutes": 1062
      },
      {
        "station": "Mountain View",
        "time": "5:46 PM",
        "minutes": 1066
      },
      {
        "station": "San Antonio - - - -",
        "time": "5:49 PM",
        "minutes": 1069
      },
      {
        "station": "California Avenue - - - -",
        "time": "5:52 PM",
        "minutes": 1072
      },
      {
        "station": "Palo Alto",
        "time": "5:55 PM",
        "minutes": 1075
      },
      {
        "station": "Menlo Park - - - -",
        "time": "5:58 PM",
        "minutes": 1078
      },
      {
        "station": "Redwood City",
        "time": "6:03 PM",
        "minutes": 1083
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "6:07 PM",
        "minutes": 1087
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "6:09 PM",
        "minutes": 1089
      },
      {
        "station": "Hillsdale",
        "time": "6:12 PM",
        "minutes": 1092
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "6:15 PM",
        "minutes": 1095
      },
      {
        "station": "San Mateo",
        "time": "6:17 PM",
        "minutes": 1097
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "6:20 PM",
        "minutes": 1100
      },
      {
        "station": "Millbrae",
        "time": "6:24 PM",
        "minutes": 1104
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "6:27 PM",
        "minutes": 1107
      },
      {
        "station": "S. San Francisco",
        "time": "6:30 PM",
        "minutes": 1110
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "6:35 PM",
        "minutes": 1115
      },
      {
        "station": "22 Street",
        "time": "6:40 PM",
        "minutes": 1120
      },
      {
        "station": "San Francisco",
        "time": "6:46 PM",
        "minutes": 1126
      }
    ]
  },
  {
    "trainNum": "425",
    "type": "Limited",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "5:43 PM",
        "minutes": 1063
      },
      {
        "station": "Santa Clara - - - -",
        "time": "5:49 PM",
        "minutes": 1069
      },
      {
        "station": "Lawrence - - - -",
        "time": "5:54 PM",
        "minutes": 1074
      },
      {
        "station": "Sunnyvale",
        "time": "5:57 PM",
        "minutes": 1077
      },
      {
        "station": "Mountain View",
        "time": "6:01 PM",
        "minutes": 1081
      },
      {
        "station": "San Antonio - - - -",
        "time": "6:04 PM",
        "minutes": 1084
      },
      {
        "station": "California Avenue - - - -",
        "time": "6:07 PM",
        "minutes": 1087
      },
      {
        "station": "Palo Alto",
        "time": "6:10 PM",
        "minutes": 1090
      },
      {
        "station": "Menlo Park - - - -",
        "time": "6:13 PM",
        "minutes": 1093
      },
      {
        "station": "Redwood City",
        "time": "6:18 PM",
        "minutes": 1098
      },
      {
        "station": "Hillsdale",
        "time": "6:25 PM",
        "minutes": 1105
      },
      {
        "station": "San Mateo",
        "time": "6:28 PM",
        "minutes": 1108
      },
      {
        "station": "Millbrae",
        "time": "6:33 PM",
        "minutes": 1113
      },
      {
        "station": "S. San Francisco",
        "time": "6:39 PM",
        "minutes": 1119
      },
      {
        "station": "22 Street",
        "time": "6:47 PM",
        "minutes": 1127
      },
      {
        "station": "San Francisco",
        "time": "6:53 PM",
        "minutes": 1133
      }
    ]
  },
  {
    "trainNum": "153",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "5:52 PM",
        "minutes": 1072
      },
      {
        "station": "San Jose Diridon",
        "time": "5:58 PM",
        "minutes": 1078
      },
      {
        "station": "Santa Clara - - - -",
        "time": "6:04 PM",
        "minutes": 1084
      },
      {
        "station": "Lawrence - - - -",
        "time": "6:09 PM",
        "minutes": 1089
      },
      {
        "station": "Sunnyvale",
        "time": "6:12 PM",
        "minutes": 1092
      },
      {
        "station": "Mountain View",
        "time": "6:16 PM",
        "minutes": 1096
      },
      {
        "station": "San Antonio - - - -",
        "time": "6:19 PM",
        "minutes": 1099
      },
      {
        "station": "California Avenue - - - -",
        "time": "6:22 PM",
        "minutes": 1102
      },
      {
        "station": "Palo Alto",
        "time": "6:25 PM",
        "minutes": 1105
      },
      {
        "station": "Menlo Park - - - -",
        "time": "6:28 PM",
        "minutes": 1108
      },
      {
        "station": "Redwood City",
        "time": "6:33 PM",
        "minutes": 1113
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "6:37 PM",
        "minutes": 1117
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "6:39 PM",
        "minutes": 1119
      },
      {
        "station": "Hillsdale",
        "time": "6:42 PM",
        "minutes": 1122
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "6:45 PM",
        "minutes": 1125
      },
      {
        "station": "San Mateo",
        "time": "6:47 PM",
        "minutes": 1127
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "6:50 PM",
        "minutes": 1130
      },
      {
        "station": "Millbrae",
        "time": "6:54 PM",
        "minutes": 1134
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "6:57 PM",
        "minutes": 1137
      },
      {
        "station": "S. San Francisco",
        "time": "7:00 PM",
        "minutes": 1140
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "7:05 PM",
        "minutes": 1145
      },
      {
        "station": "22 Street",
        "time": "7:10 PM",
        "minutes": 1150
      },
      {
        "station": "San Francisco",
        "time": "7:16 PM",
        "minutes": 1156
      }
    ]
  },
  {
    "trainNum": "527",
    "type": "Express",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "6:22 PM",
        "minutes": 1102
      },
      {
        "station": "Sunnyvale",
        "time": "6:32 PM",
        "minutes": 1112
      },
      {
        "station": "Mountain View",
        "time": "6:36 PM",
        "minutes": 1116
      },
      {
        "station": "Palo Alto",
        "time": "6:43 PM",
        "minutes": 1123
      },
      {
        "station": "Redwood City",
        "time": "6:49 PM",
        "minutes": 1129
      },
      {
        "station": "Hillsdale",
        "time": "6:56 PM",
        "minutes": 1136
      },
      {
        "station": "San Mateo",
        "time": "6:59 PM",
        "minutes": 1139
      },
      {
        "station": "Millbrae",
        "time": "7:04 PM",
        "minutes": 1144
      },
      {
        "station": "S. San Francisco",
        "time": "7:09 PM",
        "minutes": 1149
      },
      {
        "station": "22 Street",
        "time": "7:16 PM",
        "minutes": 1156
      },
      {
        "station": "San Francisco",
        "time": "7:22 PM",
        "minutes": 1162
      }
    ]
  },
  {
    "trainNum": "155",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "6:28 PM",
        "minutes": 1108
      },
      {
        "station": "Santa Clara - - - -",
        "time": "6:34 PM",
        "minutes": 1114
      },
      {
        "station": "Lawrence - - - -",
        "time": "6:39 PM",
        "minutes": 1119
      },
      {
        "station": "Sunnyvale",
        "time": "6:42 PM",
        "minutes": 1122
      },
      {
        "station": "Mountain View",
        "time": "6:46 PM",
        "minutes": 1126
      },
      {
        "station": "San Antonio - - - -",
        "time": "6:49 PM",
        "minutes": 1129
      },
      {
        "station": "California Avenue - - - -",
        "time": "6:52 PM",
        "minutes": 1132
      },
      {
        "station": "Palo Alto",
        "time": "6:55 PM",
        "minutes": 1135
      },
      {
        "station": "Menlo Park - - - -",
        "time": "6:58 PM",
        "minutes": 1138
      },
      {
        "station": "Redwood City",
        "time": "7:03 PM",
        "minutes": 1143
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "7:07 PM",
        "minutes": 1147
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "7:09 PM",
        "minutes": 1149
      },
      {
        "station": "Hillsdale",
        "time": "7:12 PM",
        "minutes": 1152
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "7:15 PM",
        "minutes": 1155
      },
      {
        "station": "San Mateo",
        "time": "7:17 PM",
        "minutes": 1157
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "7:20 PM",
        "minutes": 1160
      },
      {
        "station": "Millbrae",
        "time": "7:24 PM",
        "minutes": 1164
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "7:27 PM",
        "minutes": 1167
      },
      {
        "station": "S. San Francisco",
        "time": "7:30 PM",
        "minutes": 1170
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "7:35 PM",
        "minutes": 1175
      },
      {
        "station": "22 Street",
        "time": "7:40 PM",
        "minutes": 1180
      },
      {
        "station": "San Francisco",
        "time": "7:46 PM",
        "minutes": 1186
      }
    ]
  },
  {
    "trainNum": "429",
    "type": "Limited",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "6:43 PM",
        "minutes": 1123
      },
      {
        "station": "Santa Clara - - - -",
        "time": "6:49 PM",
        "minutes": 1129
      },
      {
        "station": "Lawrence - - - -",
        "time": "6:54 PM",
        "minutes": 1134
      },
      {
        "station": "Sunnyvale",
        "time": "6:57 PM",
        "minutes": 1137
      },
      {
        "station": "Mountain View",
        "time": "7:01 PM",
        "minutes": 1141
      },
      {
        "station": "San Antonio - - - -",
        "time": "7:04 PM",
        "minutes": 1144
      },
      {
        "station": "California Avenue - - - -",
        "time": "7:07 PM",
        "minutes": 1147
      },
      {
        "station": "Palo Alto",
        "time": "7:10 PM",
        "minutes": 1150
      },
      {
        "station": "Menlo Park - - - -",
        "time": "7:13 PM",
        "minutes": 1153
      },
      {
        "station": "Redwood City",
        "time": "7:18 PM",
        "minutes": 1158
      },
      {
        "station": "Hillsdale",
        "time": "7:25 PM",
        "minutes": 1165
      },
      {
        "station": "San Mateo",
        "time": "7:28 PM",
        "minutes": 1168
      },
      {
        "station": "Millbrae",
        "time": "7:33 PM",
        "minutes": 1173
      },
      {
        "station": "S. San Francisco",
        "time": "7:39 PM",
        "minutes": 1179
      },
      {
        "station": "22 Street",
        "time": "7:47 PM",
        "minutes": 1187
      },
      {
        "station": "San Francisco",
        "time": "7:53 PM",
        "minutes": 1193
      }
    ]
  },
  {
    "trainNum": "157",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "6:52 PM",
        "minutes": 1132
      },
      {
        "station": "San Jose Diridon",
        "time": "6:58 PM",
        "minutes": 1138
      },
      {
        "station": "Santa Clara - - - -",
        "time": "7:04 PM",
        "minutes": 1144
      },
      {
        "station": "Lawrence - - - -",
        "time": "7:09 PM",
        "minutes": 1149
      },
      {
        "station": "Sunnyvale",
        "time": "7:12 PM",
        "minutes": 1152
      },
      {
        "station": "Mountain View",
        "time": "7:16 PM",
        "minutes": 1156
      },
      {
        "station": "San Antonio - - - -",
        "time": "7:19 PM",
        "minutes": 1159
      },
      {
        "station": "California Avenue - - - -",
        "time": "7:22 PM",
        "minutes": 1162
      },
      {
        "station": "Palo Alto",
        "time": "7:25 PM",
        "minutes": 1165
      },
      {
        "station": "Menlo Park - - - -",
        "time": "7:28 PM",
        "minutes": 1168
      },
      {
        "station": "Redwood City",
        "time": "7:33 PM",
        "minutes": 1173
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "7:37 PM",
        "minutes": 1177
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "7:39 PM",
        "minutes": 1179
      },
      {
        "station": "Hillsdale",
        "time": "7:42 PM",
        "minutes": 1182
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "7:45 PM",
        "minutes": 1185
      },
      {
        "station": "San Mateo",
        "time": "7:47 PM",
        "minutes": 1187
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "7:50 PM",
        "minutes": 1190
      },
      {
        "station": "Millbrae",
        "time": "7:54 PM",
        "minutes": 1194
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "7:57 PM",
        "minutes": 1197
      },
      {
        "station": "S. San Francisco",
        "time": "8:00 PM",
        "minutes": 1200
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "8:05 PM",
        "minutes": 1205
      },
      {
        "station": "22 Street",
        "time": "8:10 PM",
        "minutes": 1210
      },
      {
        "station": "San Francisco",
        "time": "8:16 PM",
        "minutes": 1216
      }
    ]
  },
  {
    "trainNum": "159",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "7:28 PM",
        "minutes": 1168
      },
      {
        "station": "Santa Clara - - - -",
        "time": "7:34 PM",
        "minutes": 1174
      },
      {
        "station": "Lawrence - - - -",
        "time": "7:39 PM",
        "minutes": 1179
      },
      {
        "station": "Sunnyvale",
        "time": "7:42 PM",
        "minutes": 1182
      },
      {
        "station": "Mountain View",
        "time": "7:46 PM",
        "minutes": 1186
      },
      {
        "station": "San Antonio - - - -",
        "time": "7:49 PM",
        "minutes": 1189
      },
      {
        "station": "California Avenue - - - -",
        "time": "7:52 PM",
        "minutes": 1192
      },
      {
        "station": "Palo Alto",
        "time": "7:55 PM",
        "minutes": 1195
      },
      {
        "station": "Menlo Park - - - -",
        "time": "7:58 PM",
        "minutes": 1198
      },
      {
        "station": "Redwood City",
        "time": "8:03 PM",
        "minutes": 1203
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "8:07 PM",
        "minutes": 1207
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "8:09 PM",
        "minutes": 1209
      },
      {
        "station": "Hillsdale",
        "time": "8:12 PM",
        "minutes": 1212
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "8:15 PM",
        "minutes": 1215
      },
      {
        "station": "San Mateo",
        "time": "8:17 PM",
        "minutes": 1217
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "8:20 PM",
        "minutes": 1220
      },
      {
        "station": "Millbrae",
        "time": "8:24 PM",
        "minutes": 1224
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "8:27 PM",
        "minutes": 1227
      },
      {
        "station": "S. San Francisco",
        "time": "8:30 PM",
        "minutes": 1230
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "8:35 PM",
        "minutes": 1235
      },
      {
        "station": "22 Street",
        "time": "8:40 PM",
        "minutes": 1240
      },
      {
        "station": "San Francisco",
        "time": "8:46 PM",
        "minutes": 1246
      }
    ]
  },
  {
    "trainNum": "161",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "7:52 PM",
        "minutes": 1192
      },
      {
        "station": "San Jose Diridon",
        "time": "7:58 PM",
        "minutes": 1198
      },
      {
        "station": "Santa Clara - - - -",
        "time": "8:04 PM",
        "minutes": 1204
      },
      {
        "station": "Lawrence - - - -",
        "time": "8:09 PM",
        "minutes": 1209
      },
      {
        "station": "Sunnyvale",
        "time": "8:12 PM",
        "minutes": 1212
      },
      {
        "station": "Mountain View",
        "time": "8:16 PM",
        "minutes": 1216
      },
      {
        "station": "San Antonio - - - -",
        "time": "8:19 PM",
        "minutes": 1219
      },
      {
        "station": "California Avenue - - - -",
        "time": "8:22 PM",
        "minutes": 1222
      },
      {
        "station": "Palo Alto",
        "time": "8:25 PM",
        "minutes": 1225
      },
      {
        "station": "Menlo Park - - - -",
        "time": "8:28 PM",
        "minutes": 1228
      },
      {
        "station": "Redwood City",
        "time": "8:33 PM",
        "minutes": 1233
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "8:37 PM",
        "minutes": 1237
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "8:39 PM",
        "minutes": 1239
      },
      {
        "station": "Hillsdale",
        "time": "8:42 PM",
        "minutes": 1242
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "8:45 PM",
        "minutes": 1245
      },
      {
        "station": "San Mateo",
        "time": "8:47 PM",
        "minutes": 1247
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "8:50 PM",
        "minutes": 1250
      },
      {
        "station": "Millbrae",
        "time": "8:54 PM",
        "minutes": 1254
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "8:57 PM",
        "minutes": 1257
      },
      {
        "station": "S. San Francisco",
        "time": "9:00 PM",
        "minutes": 1260
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "9:05 PM",
        "minutes": 1265
      },
      {
        "station": "22 Street",
        "time": "9:10 PM",
        "minutes": 1270
      },
      {
        "station": "San Francisco",
        "time": "9:16 PM",
        "minutes": 1276
      }
    ]
  },
  {
    "trainNum": "163",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "8:28 PM",
        "minutes": 1228
      },
      {
        "station": "Santa Clara - - - -",
        "time": "8:34 PM",
        "minutes": 1234
      },
      {
        "station": "Lawrence - - - -",
        "time": "8:39 PM",
        "minutes": 1239
      },
      {
        "station": "Sunnyvale",
        "time": "8:42 PM",
        "minutes": 1242
      },
      {
        "station": "Mountain View",
        "time": "8:46 PM",
        "minutes": 1246
      },
      {
        "station": "San Antonio - - - -",
        "time": "8:49 PM",
        "minutes": 1249
      },
      {
        "station": "California Avenue - - - -",
        "time": "8:52 PM",
        "minutes": 1252
      },
      {
        "station": "Palo Alto",
        "time": "8:55 PM",
        "minutes": 1255
      },
      {
        "station": "Menlo Park - - - -",
        "time": "8:58 PM",
        "minutes": 1258
      },
      {
        "station": "Redwood City",
        "time": "9:03 PM",
        "minutes": 1263
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "9:07 PM",
        "minutes": 1267
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "9:09 PM",
        "minutes": 1269
      },
      {
        "station": "Hillsdale",
        "time": "9:12 PM",
        "minutes": 1272
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "9:15 PM",
        "minutes": 1275
      },
      {
        "station": "San Mateo",
        "time": "9:17 PM",
        "minutes": 1277
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "9:20 PM",
        "minutes": 1280
      },
      {
        "station": "Millbrae",
        "time": "9:24 PM",
        "minutes": 1284
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "9:27 PM",
        "minutes": 1287
      },
      {
        "station": "S. San Francisco",
        "time": "9:30 PM",
        "minutes": 1290
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "9:35 PM",
        "minutes": 1295
      },
      {
        "station": "22 Street",
        "time": "9:40 PM",
        "minutes": 1300
      },
      {
        "station": "San Francisco",
        "time": "9:46 PM",
        "minutes": 1306
      }
    ]
  },
  {
    "trainNum": "165",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "8:52 PM",
        "minutes": 1252
      },
      {
        "station": "San Jose Diridon",
        "time": "8:58 PM",
        "minutes": 1258
      },
      {
        "station": "Santa Clara - - - -",
        "time": "9:04 PM",
        "minutes": 1264
      },
      {
        "station": "Lawrence - - - -",
        "time": "9:09 PM",
        "minutes": 1269
      },
      {
        "station": "Sunnyvale",
        "time": "9:12 PM",
        "minutes": 1272
      },
      {
        "station": "Mountain View",
        "time": "9:16 PM",
        "minutes": 1276
      },
      {
        "station": "San Antonio - - - -",
        "time": "9:19 PM",
        "minutes": 1279
      },
      {
        "station": "California Avenue - - - -",
        "time": "9:22 PM",
        "minutes": 1282
      },
      {
        "station": "Palo Alto",
        "time": "9:25 PM",
        "minutes": 1285
      },
      {
        "station": "Menlo Park - - - -",
        "time": "9:28 PM",
        "minutes": 1288
      },
      {
        "station": "Redwood City",
        "time": "9:33 PM",
        "minutes": 1293
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "9:37 PM",
        "minutes": 1297
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "9:39 PM",
        "minutes": 1299
      },
      {
        "station": "Hillsdale",
        "time": "9:42 PM",
        "minutes": 1302
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "9:45 PM",
        "minutes": 1305
      },
      {
        "station": "San Mateo",
        "time": "9:47 PM",
        "minutes": 1307
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "9:50 PM",
        "minutes": 1310
      },
      {
        "station": "Millbrae",
        "time": "9:54 PM",
        "minutes": 1314
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "9:57 PM",
        "minutes": 1317
      },
      {
        "station": "S. San Francisco",
        "time": "10:00 PM",
        "minutes": 1320
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "10:05 PM",
        "minutes": 1325
      },
      {
        "station": "22 Street",
        "time": "10:10 PM",
        "minutes": 1330
      },
      {
        "station": "San Francisco",
        "time": "10:16 PM",
        "minutes": 1336
      }
    ]
  },
  {
    "trainNum": "167",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "9:28 PM",
        "minutes": 1288
      },
      {
        "station": "Santa Clara - - - -",
        "time": "9:34 PM",
        "minutes": 1294
      },
      {
        "station": "Lawrence - - - -",
        "time": "9:39 PM",
        "minutes": 1299
      },
      {
        "station": "Sunnyvale",
        "time": "9:42 PM",
        "minutes": 1302
      },
      {
        "station": "Mountain View",
        "time": "9:46 PM",
        "minutes": 1306
      },
      {
        "station": "San Antonio - - - -",
        "time": "9:49 PM",
        "minutes": 1309
      },
      {
        "station": "California Avenue - - - -",
        "time": "9:52 PM",
        "minutes": 1312
      },
      {
        "station": "Palo Alto",
        "time": "9:55 PM",
        "minutes": 1315
      },
      {
        "station": "Menlo Park - - - -",
        "time": "9:58 PM",
        "minutes": 1318
      },
      {
        "station": "Redwood City",
        "time": "10:03 PM",
        "minutes": 1323
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "10:07 PM",
        "minutes": 1327
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "10:09 PM",
        "minutes": 1329
      },
      {
        "station": "Hillsdale",
        "time": "10:12 PM",
        "minutes": 1332
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "10:15 PM",
        "minutes": 1335
      },
      {
        "station": "San Mateo",
        "time": "10:17 PM",
        "minutes": 1337
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "10:20 PM",
        "minutes": 1340
      },
      {
        "station": "Millbrae",
        "time": "10:24 PM",
        "minutes": 1344
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "10:27 PM",
        "minutes": 1347
      },
      {
        "station": "S. San Francisco",
        "time": "10:30 PM",
        "minutes": 1350
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "10:35 PM",
        "minutes": 1355
      },
      {
        "station": "22 Street",
        "time": "10:40 PM",
        "minutes": 1360
      },
      {
        "station": "San Francisco",
        "time": "10:46 PM",
        "minutes": 1366
      }
    ]
  },
  {
    "trainNum": "169",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "9:52 PM",
        "minutes": 1312
      },
      {
        "station": "San Jose Diridon",
        "time": "9:58 PM",
        "minutes": 1318
      },
      {
        "station": "Santa Clara - - - -",
        "time": "10:04 PM",
        "minutes": 1324
      },
      {
        "station": "Lawrence - - - -",
        "time": "10:09 PM",
        "minutes": 1329
      },
      {
        "station": "Sunnyvale",
        "time": "10:12 PM",
        "minutes": 1332
      },
      {
        "station": "Mountain View",
        "time": "10:16 PM",
        "minutes": 1336
      },
      {
        "station": "San Antonio - - - -",
        "time": "10:19 PM",
        "minutes": 1339
      },
      {
        "station": "California Avenue - - - -",
        "time": "10:22 PM",
        "minutes": 1342
      },
      {
        "station": "Palo Alto",
        "time": "10:25 PM",
        "minutes": 1345
      },
      {
        "station": "Menlo Park - - - -",
        "time": "10:28 PM",
        "minutes": 1348
      },
      {
        "station": "Redwood City",
        "time": "10:33 PM",
        "minutes": 1353
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "10:37 PM",
        "minutes": 1357
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "10:39 PM",
        "minutes": 1359
      },
      {
        "station": "Hillsdale",
        "time": "10:42 PM",
        "minutes": 1362
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "10:45 PM",
        "minutes": 1365
      },
      {
        "station": "San Mateo",
        "time": "10:47 PM",
        "minutes": 1367
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "10:50 PM",
        "minutes": 1370
      },
      {
        "station": "Millbrae",
        "time": "10:54 PM",
        "minutes": 1374
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "10:57 PM",
        "minutes": 1377
      },
      {
        "station": "S. San Francisco",
        "time": "11:00 PM",
        "minutes": 1380
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "11:05 PM",
        "minutes": 1385
      },
      {
        "station": "22 Street",
        "time": "11:10 PM",
        "minutes": 1390
      },
      {
        "station": "San Francisco",
        "time": "11:16 PM",
        "minutes": 1396
      }
    ]
  },
  {
    "trainNum": "171",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "10:30 PM",
        "minutes": 1350
      },
      {
        "station": "Santa Clara - - - -",
        "time": "10:36 PM",
        "minutes": 1356
      },
      {
        "station": "Lawrence - - - -",
        "time": "10:41 PM",
        "minutes": 1361
      },
      {
        "station": "Sunnyvale",
        "time": "10:44 PM",
        "minutes": 1364
      },
      {
        "station": "Mountain View",
        "time": "10:48 PM",
        "minutes": 1368
      },
      {
        "station": "San Antonio - - - -",
        "time": "10:51 PM",
        "minutes": 1371
      },
      {
        "station": "California Avenue - - - -",
        "time": "10:54 PM",
        "minutes": 1374
      },
      {
        "station": "Palo Alto",
        "time": "10:57 PM",
        "minutes": 1377
      },
      {
        "station": "Menlo Park - - - -",
        "time": "11:00 PM",
        "minutes": 1380
      },
      {
        "station": "Redwood City",
        "time": "11:05 PM",
        "minutes": 1385
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "11:09 PM",
        "minutes": 1389
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "11:11 PM",
        "minutes": 1391
      },
      {
        "station": "Hillsdale",
        "time": "11:14 PM",
        "minutes": 1394
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "11:17 PM",
        "minutes": 1397
      },
      {
        "station": "San Mateo",
        "time": "11:19 PM",
        "minutes": 1399
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "11:22 PM",
        "minutes": 1402
      },
      {
        "station": "Millbrae",
        "time": "11:26 PM",
        "minutes": 1406
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "11:29 PM",
        "minutes": 1409
      },
      {
        "station": "S. San Francisco",
        "time": "11:32 PM",
        "minutes": 1412
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "11:37 PM",
        "minutes": 1417
      },
      {
        "station": "22 Street",
        "time": "11:42 PM",
        "minutes": 1422
      },
      {
        "station": "San Francisco",
        "time": "11:48 PM",
        "minutes": 1428
      }
    ]
  },
  {
    "trainNum": "173",
    "type": "Local",
    "direction": "Northbound",
    "stops": [
      {
        "station": "Tamien",
        "time": "11:24 PM",
        "minutes": 1404
      },
      {
        "station": "San Jose Diridon",
        "time": "11:30 PM",
        "minutes": 1410
      },
      {
        "station": "Santa Clara - - - -",
        "time": "11:36 PM",
        "minutes": 1416
      },
      {
        "station": "Lawrence - - - -",
        "time": "11:41 PM",
        "minutes": 1421
      },
      {
        "station": "Sunnyvale",
        "time": "11:44 PM",
        "minutes": 1424
      },
      {
        "station": "Mountain View",
        "time": "11:48 PM",
        "minutes": 1428
      },
      {
        "station": "San Antonio - - - -",
        "time": "11:51 PM",
        "minutes": 1431
      },
      {
        "station": "California Avenue - - - -",
        "time": "11:54 PM",
        "minutes": 1434
      },
      {
        "station": "Palo Alto",
        "time": "11:57 PM",
        "minutes": 1437
      },
      {
        "station": "Menlo Park - - - -",
        "time": "12:00 AM",
        "minutes": 1440
      },
      {
        "station": "Redwood City",
        "time": "12:05 AM",
        "minutes": 1445
      },
      {
        "station": "San Carlos - - - - - - - -",
        "time": "12:09 AM",
        "minutes": 1449
      },
      {
        "station": "Belmont - - - - - - - -",
        "time": "12:11 AM",
        "minutes": 1451
      },
      {
        "station": "Hillsdale",
        "time": "12:14 AM",
        "minutes": 1454
      },
      {
        "station": "Hayward Park - - - - - - - -",
        "time": "12:17 AM",
        "minutes": 1457
      },
      {
        "station": "San Mateo",
        "time": "12:19 AM",
        "minutes": 1459
      },
      {
        "station": "Burlingame - - - - - - - -",
        "time": "12:22 AM",
        "minutes": 1462
      },
      {
        "station": "Millbrae",
        "time": "12:26 AM",
        "minutes": 1466
      },
      {
        "station": "San Bruno - - - - - - - -",
        "time": "12:29 AM",
        "minutes": 1469
      },
      {
        "station": "S. San Francisco",
        "time": "12:32 AM",
        "minutes": 1472
      },
      {
        "station": "Bayshore - - - - - - - -",
        "time": "12:37 AM",
        "minutes": 1477
      },
      {
        "station": "22 Street",
        "time": "12:42 AM",
        "minutes": 1482
      },
      {
        "station": "San Francisco",
        "time": "12:48 AM",
        "minutes": 1488
      }
    ]
  },
  {
    "trainNum": "102",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "4:55 AM",
        "minutes": 295
      },
      {
        "station": "22 Street",
        "time": "5:00 AM",
        "minutes": 300
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "5:04 AM",
        "minutes": 304
      },
      {
        "station": "S. San Francisco",
        "time": "5:10 AM",
        "minutes": 310
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "5:13 AM",
        "minutes": 313
      },
      {
        "station": "Millbrae",
        "time": "5:16 AM",
        "minutes": 316
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "5:20 AM",
        "minutes": 320
      },
      {
        "station": "San Mateo",
        "time": "5:23 AM",
        "minutes": 323
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "5:25 AM",
        "minutes": 325
      },
      {
        "station": "Hillsdale",
        "time": "5:27 AM",
        "minutes": 327
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "5:31 AM",
        "minutes": 331
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "5:33 AM",
        "minutes": 333
      },
      {
        "station": "Redwood City",
        "time": "5:37 AM",
        "minutes": 337
      },
      {
        "station": "Menlo Park - - - -",
        "time": "5:41 AM",
        "minutes": 341
      },
      {
        "station": "Palo Alto",
        "time": "5:44 AM",
        "minutes": 344
      },
      {
        "station": "California Avenue - - - -",
        "time": "5:47 AM",
        "minutes": 347
      },
      {
        "station": "San Antonio - - - -",
        "time": "5:51 AM",
        "minutes": 351
      },
      {
        "station": "Mountain View",
        "time": "5:54 AM",
        "minutes": 354
      },
      {
        "station": "Sunnyvale",
        "time": "5:58 AM",
        "minutes": 358
      },
      {
        "station": "Lawrence - - - -",
        "time": "6:01 AM",
        "minutes": 361
      },
      {
        "station": "Santa Clara - - - -",
        "time": "6:06 AM",
        "minutes": 366
      },
      {
        "station": "San Jose Diridon",
        "time": "6:12 AM",
        "minutes": 372
      }
    ]
  },
  {
    "trainNum": "104",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "5:30 AM",
        "minutes": 330
      },
      {
        "station": "22 Street",
        "time": "5:35 AM",
        "minutes": 335
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "5:39 AM",
        "minutes": 339
      },
      {
        "station": "S. San Francisco",
        "time": "5:46 AM",
        "minutes": 346
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "5:49 AM",
        "minutes": 349
      },
      {
        "station": "Millbrae",
        "time": "5:52 AM",
        "minutes": 352
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "5:56 AM",
        "minutes": 356
      },
      {
        "station": "San Mateo",
        "time": "5:59 AM",
        "minutes": 359
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "6:02 AM",
        "minutes": 362
      },
      {
        "station": "Hillsdale",
        "time": "6:05 AM",
        "minutes": 365
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "6:09 AM",
        "minutes": 369
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "6:12 AM",
        "minutes": 372
      },
      {
        "station": "Redwood City",
        "time": "6:16 AM",
        "minutes": 376
      },
      {
        "station": "Menlo Park - - - -",
        "time": "6:20 AM",
        "minutes": 380
      },
      {
        "station": "Palo Alto",
        "time": "6:24 AM",
        "minutes": 384
      },
      {
        "station": "California Avenue - - - -",
        "time": "6:27 AM",
        "minutes": 387
      },
      {
        "station": "San Antonio - - - -",
        "time": "6:31 AM",
        "minutes": 391
      },
      {
        "station": "Mountain View",
        "time": "6:34 AM",
        "minutes": 394
      },
      {
        "station": "Sunnyvale",
        "time": "6:38 AM",
        "minutes": 398
      },
      {
        "station": "Lawrence - - - -",
        "time": "6:41 AM",
        "minutes": 401
      },
      {
        "station": "Santa Clara - - - -",
        "time": "6:46 AM",
        "minutes": 406
      },
      {
        "station": "San Jose Diridon",
        "time": "7:03 AM",
        "minutes": 423
      },
      {
        "station": "Tamien",
        "time": "7:08 AM",
        "minutes": 428
      }
    ]
  },
  {
    "trainNum": "502",
    "type": "Express",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "6:20 AM",
        "minutes": 380
      },
      {
        "station": "22 Street",
        "time": "6:24 AM",
        "minutes": 384
      },
      {
        "station": "S. San Francisco",
        "time": "6:32 AM",
        "minutes": 392
      },
      {
        "station": "Millbrae",
        "time": "6:38 AM",
        "minutes": 398
      },
      {
        "station": "San Mateo",
        "time": "6:43 AM",
        "minutes": 403
      },
      {
        "station": "Hillsdale",
        "time": "6:46 AM",
        "minutes": 406
      },
      {
        "station": "Redwood City",
        "time": "6:53 AM",
        "minutes": 413
      },
      {
        "station": "Palo Alto",
        "time": "6:59 AM",
        "minutes": 419
      },
      {
        "station": "Mountain View",
        "time": "7:06 AM",
        "minutes": 426
      },
      {
        "station": "Sunnyvale",
        "time": "7:09 AM",
        "minutes": 429
      },
      {
        "station": "San Jose Diridon",
        "time": "7:20 AM",
        "minutes": 440
      },
      {
        "station": "8XX South County Connector",
        "time": "4:20 PM",
        "minutes": 980
      }
    ]
  },
  {
    "trainNum": "106",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "6:25 AM",
        "minutes": 385
      },
      {
        "station": "22 Street",
        "time": "6:30 AM",
        "minutes": 390
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "6:34 AM",
        "minutes": 394
      },
      {
        "station": "S. San Francisco",
        "time": "6:40 AM",
        "minutes": 400
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "6:43 AM",
        "minutes": 403
      },
      {
        "station": "Millbrae",
        "time": "6:46 AM",
        "minutes": 406
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "6:50 AM",
        "minutes": 410
      },
      {
        "station": "San Mateo",
        "time": "6:53 AM",
        "minutes": 413
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "6:55 AM",
        "minutes": 415
      },
      {
        "station": "Hillsdale",
        "time": "6:57 AM",
        "minutes": 417
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "7:01 AM",
        "minutes": 421
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "7:03 AM",
        "minutes": 423
      },
      {
        "station": "Redwood City",
        "time": "7:07 AM",
        "minutes": 427
      },
      {
        "station": "Menlo Park - - - -",
        "time": "7:11 AM",
        "minutes": 431
      },
      {
        "station": "Palo Alto",
        "time": "7:14 AM",
        "minutes": 434
      },
      {
        "station": "California Avenue - - - -",
        "time": "7:17 AM",
        "minutes": 437
      },
      {
        "station": "San Antonio - - - -",
        "time": "7:21 AM",
        "minutes": 441
      },
      {
        "station": "Mountain View",
        "time": "7:24 AM",
        "minutes": 444
      },
      {
        "station": "Sunnyvale",
        "time": "7:28 AM",
        "minutes": 448
      },
      {
        "station": "Lawrence - - - -",
        "time": "7:31 AM",
        "minutes": 451
      },
      {
        "station": "Santa Clara - - - -",
        "time": "7:36 AM",
        "minutes": 456
      },
      {
        "station": "San Jose Diridon",
        "time": "7:42 AM",
        "minutes": 462
      },
      {
        "station": "8XX South County Connector",
        "time": "4:23 PM",
        "minutes": 983
      }
    ]
  },
  {
    "trainNum": "404",
    "type": "Limited",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "6:48 AM",
        "minutes": 408
      },
      {
        "station": "22 Street",
        "time": "6:53 AM",
        "minutes": 413
      },
      {
        "station": "S. San Francisco",
        "time": "7:01 AM",
        "minutes": 421
      },
      {
        "station": "Millbrae",
        "time": "7:07 AM",
        "minutes": 427
      },
      {
        "station": "San Mateo",
        "time": "7:12 AM",
        "minutes": 432
      },
      {
        "station": "Hillsdale",
        "time": "7:15 AM",
        "minutes": 435
      },
      {
        "station": "Redwood City",
        "time": "7:22 AM",
        "minutes": 442
      },
      {
        "station": "Menlo Park - - - -",
        "time": "7:26 AM",
        "minutes": 446
      },
      {
        "station": "Palo Alto",
        "time": "7:29 AM",
        "minutes": 449
      },
      {
        "station": "California Avenue - - - -",
        "time": "7:32 AM",
        "minutes": 452
      },
      {
        "station": "San Antonio - - - -",
        "time": "7:36 AM",
        "minutes": 456
      },
      {
        "station": "Mountain View",
        "time": "7:39 AM",
        "minutes": 459
      },
      {
        "station": "Sunnyvale",
        "time": "7:43 AM",
        "minutes": 463
      },
      {
        "station": "Lawrence - - - -",
        "time": "7:46 AM",
        "minutes": 466
      },
      {
        "station": "Santa Clara - - - -",
        "time": "7:51 AM",
        "minutes": 471
      },
      {
        "station": "San Jose Diridon",
        "time": "7:58 AM",
        "minutes": 478
      }
    ]
  },
  {
    "trainNum": "108",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "6:55 AM",
        "minutes": 415
      },
      {
        "station": "22 Street",
        "time": "7:00 AM",
        "minutes": 420
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "7:04 AM",
        "minutes": 424
      },
      {
        "station": "S. San Francisco",
        "time": "7:10 AM",
        "minutes": 430
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "7:13 AM",
        "minutes": 433
      },
      {
        "station": "Millbrae",
        "time": "7:16 AM",
        "minutes": 436
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "7:20 AM",
        "minutes": 440
      },
      {
        "station": "San Mateo",
        "time": "7:23 AM",
        "minutes": 443
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "7:25 AM",
        "minutes": 445
      },
      {
        "station": "Hillsdale",
        "time": "7:27 AM",
        "minutes": 447
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "7:31 AM",
        "minutes": 451
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "7:33 AM",
        "minutes": 453
      },
      {
        "station": "Redwood City",
        "time": "7:37 AM",
        "minutes": 457
      },
      {
        "station": "Menlo Park - - - -",
        "time": "7:41 AM",
        "minutes": 461
      },
      {
        "station": "Palo Alto",
        "time": "7:44 AM",
        "minutes": 464
      },
      {
        "station": "California Avenue - - - -",
        "time": "7:47 AM",
        "minutes": 467
      },
      {
        "station": "San Antonio - - - -",
        "time": "7:51 AM",
        "minutes": 471
      },
      {
        "station": "Mountain View",
        "time": "7:54 AM",
        "minutes": 474
      },
      {
        "station": "Sunnyvale",
        "time": "7:58 AM",
        "minutes": 478
      },
      {
        "station": "Lawrence - - - -",
        "time": "8:01 AM",
        "minutes": 481
      },
      {
        "station": "Santa Clara - - - -",
        "time": "8:06 AM",
        "minutes": 486
      },
      {
        "station": "College Park - - - - - - - - - - - - - - - - - - - - - - - - -",
        "time": "8:08 AM",
        "minutes": 488
      },
      {
        "station": "San Jose Diridon",
        "time": "8:23 AM",
        "minutes": 503
      },
      {
        "station": "Tamien",
        "time": "8:28 AM",
        "minutes": 508
      }
    ]
  },
  {
    "trainNum": "506",
    "type": "Express",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "7:20 AM",
        "minutes": 440
      },
      {
        "station": "22 Street",
        "time": "7:24 AM",
        "minutes": 444
      },
      {
        "station": "S. San Francisco",
        "time": "7:32 AM",
        "minutes": 452
      },
      {
        "station": "Millbrae",
        "time": "7:38 AM",
        "minutes": 458
      },
      {
        "station": "San Mateo",
        "time": "7:43 AM",
        "minutes": 463
      },
      {
        "station": "Hillsdale",
        "time": "7:46 AM",
        "minutes": 466
      },
      {
        "station": "Redwood City",
        "time": "7:53 AM",
        "minutes": 473
      },
      {
        "station": "Palo Alto",
        "time": "7:59 AM",
        "minutes": 479
      },
      {
        "station": "Mountain View",
        "time": "8:06 AM",
        "minutes": 486
      },
      {
        "station": "Sunnyvale",
        "time": "8:09 AM",
        "minutes": 489
      },
      {
        "station": "San Jose Diridon",
        "time": "8:20 AM",
        "minutes": 500
      }
    ]
  },
  {
    "trainNum": "110",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "7:25 AM",
        "minutes": 445
      },
      {
        "station": "22 Street",
        "time": "7:30 AM",
        "minutes": 450
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "7:34 AM",
        "minutes": 454
      },
      {
        "station": "S. San Francisco",
        "time": "7:40 AM",
        "minutes": 460
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "7:43 AM",
        "minutes": 463
      },
      {
        "station": "Millbrae",
        "time": "7:46 AM",
        "minutes": 466
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "7:50 AM",
        "minutes": 470
      },
      {
        "station": "San Mateo",
        "time": "7:53 AM",
        "minutes": 473
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "7:55 AM",
        "minutes": 475
      },
      {
        "station": "Hillsdale",
        "time": "7:57 AM",
        "minutes": 477
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "8:01 AM",
        "minutes": 481
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "8:03 AM",
        "minutes": 483
      },
      {
        "station": "Redwood City",
        "time": "8:07 AM",
        "minutes": 487
      },
      {
        "station": "Menlo Park - - - -",
        "time": "8:11 AM",
        "minutes": 491
      },
      {
        "station": "Palo Alto",
        "time": "8:14 AM",
        "minutes": 494
      },
      {
        "station": "California Avenue - - - -",
        "time": "8:17 AM",
        "minutes": 497
      },
      {
        "station": "San Antonio - - - -",
        "time": "8:21 AM",
        "minutes": 501
      },
      {
        "station": "Mountain View",
        "time": "8:24 AM",
        "minutes": 504
      },
      {
        "station": "Sunnyvale",
        "time": "8:28 AM",
        "minutes": 508
      },
      {
        "station": "Lawrence - - - -",
        "time": "8:31 AM",
        "minutes": 511
      },
      {
        "station": "Santa Clara - - - -",
        "time": "8:36 AM",
        "minutes": 516
      },
      {
        "station": "San Jose Diridon",
        "time": "8:42 AM",
        "minutes": 522
      }
    ]
  },
  {
    "trainNum": "408",
    "type": "Limited",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "7:48 AM",
        "minutes": 468
      },
      {
        "station": "22 Street",
        "time": "7:53 AM",
        "minutes": 473
      },
      {
        "station": "S. San Francisco",
        "time": "8:01 AM",
        "minutes": 481
      },
      {
        "station": "Millbrae",
        "time": "8:07 AM",
        "minutes": 487
      },
      {
        "station": "San Mateo",
        "time": "8:12 AM",
        "minutes": 492
      },
      {
        "station": "Hillsdale",
        "time": "8:15 AM",
        "minutes": 495
      },
      {
        "station": "Redwood City",
        "time": "8:22 AM",
        "minutes": 502
      },
      {
        "station": "Menlo Park - - - -",
        "time": "8:26 AM",
        "minutes": 506
      },
      {
        "station": "Palo Alto",
        "time": "8:29 AM",
        "minutes": 509
      },
      {
        "station": "California Avenue - - - -",
        "time": "8:32 AM",
        "minutes": 512
      },
      {
        "station": "San Antonio - - - -",
        "time": "8:36 AM",
        "minutes": 516
      },
      {
        "station": "Mountain View",
        "time": "8:39 AM",
        "minutes": 519
      },
      {
        "station": "Sunnyvale",
        "time": "8:43 AM",
        "minutes": 523
      },
      {
        "station": "Lawrence - - - -",
        "time": "8:46 AM",
        "minutes": 526
      },
      {
        "station": "Santa Clara - - - -",
        "time": "8:51 AM",
        "minutes": 531
      },
      {
        "station": "San Jose Diridon",
        "time": "8:58 AM",
        "minutes": 538
      }
    ]
  },
  {
    "trainNum": "112",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "7:55 AM",
        "minutes": 475
      },
      {
        "station": "22 Street",
        "time": "8:00 AM",
        "minutes": 480
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "8:04 AM",
        "minutes": 484
      },
      {
        "station": "S. San Francisco",
        "time": "8:10 AM",
        "minutes": 490
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "8:13 AM",
        "minutes": 493
      },
      {
        "station": "Millbrae",
        "time": "8:16 AM",
        "minutes": 496
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "8:20 AM",
        "minutes": 500
      },
      {
        "station": "San Mateo",
        "time": "8:23 AM",
        "minutes": 503
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "8:25 AM",
        "minutes": 505
      },
      {
        "station": "Hillsdale",
        "time": "8:27 AM",
        "minutes": 507
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "8:31 AM",
        "minutes": 511
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "8:33 AM",
        "minutes": 513
      },
      {
        "station": "Redwood City",
        "time": "8:37 AM",
        "minutes": 517
      },
      {
        "station": "Menlo Park - - - -",
        "time": "8:41 AM",
        "minutes": 521
      },
      {
        "station": "Palo Alto",
        "time": "8:44 AM",
        "minutes": 524
      },
      {
        "station": "California Avenue - - - -",
        "time": "8:47 AM",
        "minutes": 527
      },
      {
        "station": "San Antonio - - - -",
        "time": "8:51 AM",
        "minutes": 531
      },
      {
        "station": "Mountain View",
        "time": "8:54 AM",
        "minutes": 534
      },
      {
        "station": "Sunnyvale",
        "time": "8:58 AM",
        "minutes": 538
      },
      {
        "station": "Lawrence - - - -",
        "time": "9:01 AM",
        "minutes": 541
      },
      {
        "station": "Santa Clara - - - -",
        "time": "9:06 AM",
        "minutes": 546
      },
      {
        "station": "San Jose Diridon",
        "time": "9:13 AM",
        "minutes": 553
      },
      {
        "station": "Tamien",
        "time": "9:18 AM",
        "minutes": 558
      }
    ]
  },
  {
    "trainNum": "510",
    "type": "Express",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "8:20 AM",
        "minutes": 500
      },
      {
        "station": "22 Street",
        "time": "8:24 AM",
        "minutes": 504
      },
      {
        "station": "S. San Francisco",
        "time": "8:32 AM",
        "minutes": 512
      },
      {
        "station": "Millbrae",
        "time": "8:38 AM",
        "minutes": 518
      },
      {
        "station": "San Mateo",
        "time": "8:43 AM",
        "minutes": 523
      },
      {
        "station": "Hillsdale",
        "time": "8:46 AM",
        "minutes": 526
      },
      {
        "station": "Redwood City",
        "time": "8:53 AM",
        "minutes": 533
      },
      {
        "station": "Palo Alto",
        "time": "8:59 AM",
        "minutes": 539
      },
      {
        "station": "Mountain View",
        "time": "9:06 AM",
        "minutes": 546
      },
      {
        "station": "Sunnyvale",
        "time": "9:09 AM",
        "minutes": 549
      },
      {
        "station": "San Jose Diridon",
        "time": "9:20 AM",
        "minutes": 560
      }
    ]
  },
  {
    "trainNum": "114",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "8:25 AM",
        "minutes": 505
      },
      {
        "station": "22 Street",
        "time": "8:30 AM",
        "minutes": 510
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "8:34 AM",
        "minutes": 514
      },
      {
        "station": "S. San Francisco",
        "time": "8:40 AM",
        "minutes": 520
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "8:43 AM",
        "minutes": 523
      },
      {
        "station": "Millbrae",
        "time": "8:46 AM",
        "minutes": 526
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "8:50 AM",
        "minutes": 530
      },
      {
        "station": "San Mateo",
        "time": "8:53 AM",
        "minutes": 533
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "8:55 AM",
        "minutes": 535
      },
      {
        "station": "Hillsdale",
        "time": "8:57 AM",
        "minutes": 537
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "9:01 AM",
        "minutes": 541
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "9:03 AM",
        "minutes": 543
      },
      {
        "station": "Redwood City",
        "time": "9:07 AM",
        "minutes": 547
      },
      {
        "station": "Menlo Park - - - -",
        "time": "9:11 AM",
        "minutes": 551
      },
      {
        "station": "Palo Alto",
        "time": "9:14 AM",
        "minutes": 554
      },
      {
        "station": "California Avenue - - - -",
        "time": "9:17 AM",
        "minutes": 557
      },
      {
        "station": "San Antonio - - - -",
        "time": "9:21 AM",
        "minutes": 561
      },
      {
        "station": "Mountain View",
        "time": "9:24 AM",
        "minutes": 564
      },
      {
        "station": "Sunnyvale",
        "time": "9:28 AM",
        "minutes": 568
      },
      {
        "station": "Lawrence - - - -",
        "time": "9:31 AM",
        "minutes": 571
      },
      {
        "station": "Santa Clara - - - -",
        "time": "9:36 AM",
        "minutes": 576
      },
      {
        "station": "San Jose Diridon",
        "time": "9:42 AM",
        "minutes": 582
      }
    ]
  },
  {
    "trainNum": "412",
    "type": "Limited",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "8:48 AM",
        "minutes": 528
      },
      {
        "station": "22 Street",
        "time": "8:53 AM",
        "minutes": 533
      },
      {
        "station": "S. San Francisco",
        "time": "9:01 AM",
        "minutes": 541
      },
      {
        "station": "Millbrae",
        "time": "9:07 AM",
        "minutes": 547
      },
      {
        "station": "San Mateo",
        "time": "9:12 AM",
        "minutes": 552
      },
      {
        "station": "Hillsdale",
        "time": "9:15 AM",
        "minutes": 555
      },
      {
        "station": "Redwood City",
        "time": "9:22 AM",
        "minutes": 562
      },
      {
        "station": "Menlo Park - - - -",
        "time": "9:26 AM",
        "minutes": 566
      },
      {
        "station": "Palo Alto",
        "time": "9:29 AM",
        "minutes": 569
      },
      {
        "station": "California Avenue - - - -",
        "time": "9:32 AM",
        "minutes": 572
      },
      {
        "station": "San Antonio - - - -",
        "time": "9:36 AM",
        "minutes": 576
      },
      {
        "station": "Mountain View",
        "time": "9:39 AM",
        "minutes": 579
      },
      {
        "station": "Sunnyvale",
        "time": "9:43 AM",
        "minutes": 583
      },
      {
        "station": "Lawrence - - - -",
        "time": "9:46 AM",
        "minutes": 586
      },
      {
        "station": "Santa Clara - - - -",
        "time": "9:51 AM",
        "minutes": 591
      },
      {
        "station": "San Jose Diridon",
        "time": "9:58 AM",
        "minutes": 598
      }
    ]
  },
  {
    "trainNum": "116",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "8:55 AM",
        "minutes": 535
      },
      {
        "station": "22 Street",
        "time": "9:00 AM",
        "minutes": 540
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "9:04 AM",
        "minutes": 544
      },
      {
        "station": "S. San Francisco",
        "time": "9:10 AM",
        "minutes": 550
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "9:13 AM",
        "minutes": 553
      },
      {
        "station": "Millbrae",
        "time": "9:16 AM",
        "minutes": 556
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "9:20 AM",
        "minutes": 560
      },
      {
        "station": "San Mateo",
        "time": "9:23 AM",
        "minutes": 563
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "9:25 AM",
        "minutes": 565
      },
      {
        "station": "Hillsdale",
        "time": "9:27 AM",
        "minutes": 567
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "9:31 AM",
        "minutes": 571
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "9:33 AM",
        "minutes": 573
      },
      {
        "station": "Redwood City",
        "time": "9:37 AM",
        "minutes": 577
      },
      {
        "station": "Menlo Park - - - -",
        "time": "9:41 AM",
        "minutes": 581
      },
      {
        "station": "Palo Alto",
        "time": "9:44 AM",
        "minutes": 584
      },
      {
        "station": "California Avenue - - - -",
        "time": "9:47 AM",
        "minutes": 587
      },
      {
        "station": "San Antonio - - - -",
        "time": "9:51 AM",
        "minutes": 591
      },
      {
        "station": "Mountain View",
        "time": "9:54 AM",
        "minutes": 594
      },
      {
        "station": "Sunnyvale",
        "time": "9:58 AM",
        "minutes": 598
      },
      {
        "station": "Lawrence - - - -",
        "time": "10:01 AM",
        "minutes": 601
      },
      {
        "station": "Santa Clara - - - -",
        "time": "10:06 AM",
        "minutes": 606
      },
      {
        "station": "San Jose Diridon",
        "time": "10:13 AM",
        "minutes": 613
      },
      {
        "station": "Tamien",
        "time": "10:18 AM",
        "minutes": 618
      }
    ]
  },
  {
    "trainNum": "118",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "9:25 AM",
        "minutes": 565
      },
      {
        "station": "22 Street",
        "time": "9:30 AM",
        "minutes": 570
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "9:34 AM",
        "minutes": 574
      },
      {
        "station": "S. San Francisco",
        "time": "9:40 AM",
        "minutes": 580
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "9:43 AM",
        "minutes": 583
      },
      {
        "station": "Millbrae",
        "time": "9:46 AM",
        "minutes": 586
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "9:50 AM",
        "minutes": 590
      },
      {
        "station": "San Mateo",
        "time": "9:53 AM",
        "minutes": 593
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "9:55 AM",
        "minutes": 595
      },
      {
        "station": "Hillsdale",
        "time": "9:57 AM",
        "minutes": 597
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "10:01 AM",
        "minutes": 601
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "10:03 AM",
        "minutes": 603
      },
      {
        "station": "Redwood City",
        "time": "10:07 AM",
        "minutes": 607
      },
      {
        "station": "Menlo Park - - - -",
        "time": "10:11 AM",
        "minutes": 611
      },
      {
        "station": "Palo Alto",
        "time": "10:14 AM",
        "minutes": 614
      },
      {
        "station": "California Avenue - - - -",
        "time": "10:17 AM",
        "minutes": 617
      },
      {
        "station": "San Antonio - - - -",
        "time": "10:21 AM",
        "minutes": 621
      },
      {
        "station": "Mountain View",
        "time": "10:24 AM",
        "minutes": 624
      },
      {
        "station": "Sunnyvale",
        "time": "10:28 AM",
        "minutes": 628
      },
      {
        "station": "Lawrence - - - -",
        "time": "10:31 AM",
        "minutes": 631
      },
      {
        "station": "Santa Clara - - - -",
        "time": "10:36 AM",
        "minutes": 636
      },
      {
        "station": "San Jose Diridon",
        "time": "10:42 AM",
        "minutes": 642
      }
    ]
  },
  {
    "trainNum": "120",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "9:55 AM",
        "minutes": 595
      },
      {
        "station": "22 Street",
        "time": "10:00 AM",
        "minutes": 600
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "10:04 AM",
        "minutes": 604
      },
      {
        "station": "S. San Francisco",
        "time": "10:10 AM",
        "minutes": 610
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "10:13 AM",
        "minutes": 613
      },
      {
        "station": "Millbrae",
        "time": "10:16 AM",
        "minutes": 616
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "10:20 AM",
        "minutes": 620
      },
      {
        "station": "San Mateo",
        "time": "10:23 AM",
        "minutes": 623
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "10:25 AM",
        "minutes": 625
      },
      {
        "station": "Hillsdale",
        "time": "10:27 AM",
        "minutes": 627
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "10:31 AM",
        "minutes": 631
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "10:33 AM",
        "minutes": 633
      },
      {
        "station": "Redwood City",
        "time": "10:37 AM",
        "minutes": 637
      },
      {
        "station": "Menlo Park - - - -",
        "time": "10:41 AM",
        "minutes": 641
      },
      {
        "station": "Palo Alto",
        "time": "10:44 AM",
        "minutes": 644
      },
      {
        "station": "California Avenue - - - -",
        "time": "10:47 AM",
        "minutes": 647
      },
      {
        "station": "San Antonio - - - -",
        "time": "10:51 AM",
        "minutes": 651
      },
      {
        "station": "Mountain View",
        "time": "10:54 AM",
        "minutes": 654
      },
      {
        "station": "Sunnyvale",
        "time": "10:58 AM",
        "minutes": 658
      },
      {
        "station": "Lawrence - - - -",
        "time": "11:01 AM",
        "minutes": 661
      },
      {
        "station": "Santa Clara - - - -",
        "time": "11:06 AM",
        "minutes": 666
      },
      {
        "station": "San Jose Diridon",
        "time": "11:13 AM",
        "minutes": 673
      },
      {
        "station": "Tamien",
        "time": "11:18 AM",
        "minutes": 678
      }
    ]
  },
  {
    "trainNum": "122",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "10:25 AM",
        "minutes": 625
      },
      {
        "station": "22 Street",
        "time": "10:30 AM",
        "minutes": 630
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "10:34 AM",
        "minutes": 634
      },
      {
        "station": "S. San Francisco",
        "time": "10:40 AM",
        "minutes": 640
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "10:43 AM",
        "minutes": 643
      },
      {
        "station": "Millbrae",
        "time": "10:46 AM",
        "minutes": 646
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "10:50 AM",
        "minutes": 650
      },
      {
        "station": "San Mateo",
        "time": "10:53 AM",
        "minutes": 653
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "10:55 AM",
        "minutes": 655
      },
      {
        "station": "Hillsdale",
        "time": "10:57 AM",
        "minutes": 657
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "11:01 AM",
        "minutes": 661
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "11:03 AM",
        "minutes": 663
      },
      {
        "station": "Redwood City",
        "time": "11:07 AM",
        "minutes": 667
      },
      {
        "station": "Menlo Park - - - -",
        "time": "11:11 AM",
        "minutes": 671
      },
      {
        "station": "Palo Alto",
        "time": "11:14 AM",
        "minutes": 674
      },
      {
        "station": "California Avenue - - - -",
        "time": "11:17 AM",
        "minutes": 677
      },
      {
        "station": "San Antonio - - - -",
        "time": "11:21 AM",
        "minutes": 681
      },
      {
        "station": "Mountain View",
        "time": "11:24 AM",
        "minutes": 684
      },
      {
        "station": "Sunnyvale",
        "time": "11:28 AM",
        "minutes": 688
      },
      {
        "station": "Lawrence - - - -",
        "time": "11:31 AM",
        "minutes": 691
      },
      {
        "station": "Santa Clara - - - -",
        "time": "11:36 AM",
        "minutes": 696
      },
      {
        "station": "San Jose Diridon",
        "time": "11:42 AM",
        "minutes": 702
      }
    ]
  },
  {
    "trainNum": "124",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "10:55 AM",
        "minutes": 655
      },
      {
        "station": "22 Street",
        "time": "11:00 AM",
        "minutes": 660
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "11:04 AM",
        "minutes": 664
      },
      {
        "station": "S. San Francisco",
        "time": "11:10 AM",
        "minutes": 670
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "11:13 AM",
        "minutes": 673
      },
      {
        "station": "Millbrae",
        "time": "11:16 AM",
        "minutes": 676
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "11:20 AM",
        "minutes": 680
      },
      {
        "station": "San Mateo",
        "time": "11:23 AM",
        "minutes": 683
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "11:25 AM",
        "minutes": 685
      },
      {
        "station": "Hillsdale",
        "time": "11:27 AM",
        "minutes": 687
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "11:31 AM",
        "minutes": 691
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "11:33 AM",
        "minutes": 693
      },
      {
        "station": "Redwood City",
        "time": "11:37 AM",
        "minutes": 697
      },
      {
        "station": "Menlo Park - - - -",
        "time": "11:41 AM",
        "minutes": 701
      },
      {
        "station": "Palo Alto",
        "time": "11:44 AM",
        "minutes": 704
      },
      {
        "station": "California Avenue - - - -",
        "time": "11:47 AM",
        "minutes": 707
      },
      {
        "station": "San Antonio - - - -",
        "time": "11:51 AM",
        "minutes": 711
      },
      {
        "station": "Mountain View",
        "time": "11:54 AM",
        "minutes": 714
      },
      {
        "station": "Sunnyvale",
        "time": "11:58 AM",
        "minutes": 718
      },
      {
        "station": "Lawrence - - - -",
        "time": "12:01 PM",
        "minutes": 721
      },
      {
        "station": "Santa Clara - - - -",
        "time": "12:06 PM",
        "minutes": 726
      },
      {
        "station": "San Jose Diridon",
        "time": "12:13 PM",
        "minutes": 733
      },
      {
        "station": "Tamien",
        "time": "12:18 PM",
        "minutes": 738
      }
    ]
  },
  {
    "trainNum": "126",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "11:25 AM",
        "minutes": 685
      },
      {
        "station": "22 Street",
        "time": "11:30 AM",
        "minutes": 690
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "11:34 AM",
        "minutes": 694
      },
      {
        "station": "S. San Francisco",
        "time": "11:40 AM",
        "minutes": 700
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "11:43 AM",
        "minutes": 703
      },
      {
        "station": "Millbrae",
        "time": "11:46 AM",
        "minutes": 706
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "11:50 AM",
        "minutes": 710
      },
      {
        "station": "San Mateo",
        "time": "11:53 AM",
        "minutes": 713
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "11:55 AM",
        "minutes": 715
      },
      {
        "station": "Hillsdale",
        "time": "11:57 AM",
        "minutes": 717
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "12:01 PM",
        "minutes": 721
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "12:03 PM",
        "minutes": 723
      },
      {
        "station": "Redwood City",
        "time": "12:07 PM",
        "minutes": 727
      },
      {
        "station": "Menlo Park - - - -",
        "time": "12:11 PM",
        "minutes": 731
      },
      {
        "station": "Palo Alto",
        "time": "12:14 PM",
        "minutes": 734
      },
      {
        "station": "California Avenue - - - -",
        "time": "12:17 PM",
        "minutes": 737
      },
      {
        "station": "San Antonio - - - -",
        "time": "12:21 PM",
        "minutes": 741
      },
      {
        "station": "Mountain View",
        "time": "12:24 PM",
        "minutes": 744
      },
      {
        "station": "Sunnyvale",
        "time": "12:28 PM",
        "minutes": 748
      },
      {
        "station": "Lawrence - - - -",
        "time": "12:31 PM",
        "minutes": 751
      },
      {
        "station": "Santa Clara - - - -",
        "time": "12:36 PM",
        "minutes": 756
      },
      {
        "station": "San Jose Diridon",
        "time": "12:42 PM",
        "minutes": 762
      }
    ]
  },
  {
    "trainNum": "128",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "11:55 AM",
        "minutes": 715
      },
      {
        "station": "22 Street",
        "time": "12:00 PM",
        "minutes": 720
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "12:04 PM",
        "minutes": 724
      },
      {
        "station": "S. San Francisco",
        "time": "12:10 PM",
        "minutes": 730
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "12:13 PM",
        "minutes": 733
      },
      {
        "station": "Millbrae",
        "time": "12:16 PM",
        "minutes": 736
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "12:20 PM",
        "minutes": 740
      },
      {
        "station": "San Mateo",
        "time": "12:23 PM",
        "minutes": 743
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "12:25 PM",
        "minutes": 745
      },
      {
        "station": "Hillsdale",
        "time": "12:27 PM",
        "minutes": 747
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "12:31 PM",
        "minutes": 751
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "12:33 PM",
        "minutes": 753
      },
      {
        "station": "Redwood City",
        "time": "12:37 PM",
        "minutes": 757
      },
      {
        "station": "Menlo Park - - - -",
        "time": "12:41 PM",
        "minutes": 761
      },
      {
        "station": "Palo Alto",
        "time": "12:44 PM",
        "minutes": 764
      },
      {
        "station": "California Avenue - - - -",
        "time": "12:47 PM",
        "minutes": 767
      },
      {
        "station": "San Antonio - - - -",
        "time": "12:51 PM",
        "minutes": 771
      },
      {
        "station": "Mountain View",
        "time": "12:54 PM",
        "minutes": 774
      },
      {
        "station": "Sunnyvale",
        "time": "12:58 PM",
        "minutes": 778
      },
      {
        "station": "Lawrence - - - -",
        "time": "1:01 PM",
        "minutes": 781
      },
      {
        "station": "Santa Clara - - - -",
        "time": "1:06 PM",
        "minutes": 786
      },
      {
        "station": "San Jose Diridon",
        "time": "1:13 PM",
        "minutes": 793
      },
      {
        "station": "Tamien",
        "time": "1:18 PM",
        "minutes": 798
      }
    ]
  },
  {
    "trainNum": "130",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "12:25 PM",
        "minutes": 745
      },
      {
        "station": "22 Street",
        "time": "12:30 PM",
        "minutes": 750
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "12:34 PM",
        "minutes": 754
      },
      {
        "station": "S. San Francisco",
        "time": "12:40 PM",
        "minutes": 760
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "12:43 PM",
        "minutes": 763
      },
      {
        "station": "Millbrae",
        "time": "12:46 PM",
        "minutes": 766
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "12:50 PM",
        "minutes": 770
      },
      {
        "station": "San Mateo",
        "time": "12:53 PM",
        "minutes": 773
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "12:55 PM",
        "minutes": 775
      },
      {
        "station": "Hillsdale",
        "time": "12:57 PM",
        "minutes": 777
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "1:01 PM",
        "minutes": 781
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "1:03 PM",
        "minutes": 783
      },
      {
        "station": "Redwood City",
        "time": "1:07 PM",
        "minutes": 787
      },
      {
        "station": "Menlo Park - - - -",
        "time": "1:11 PM",
        "minutes": 791
      },
      {
        "station": "Palo Alto",
        "time": "1:14 PM",
        "minutes": 794
      },
      {
        "station": "California Avenue - - - -",
        "time": "1:17 PM",
        "minutes": 797
      },
      {
        "station": "San Antonio - - - -",
        "time": "1:21 PM",
        "minutes": 801
      },
      {
        "station": "Mountain View",
        "time": "1:24 PM",
        "minutes": 804
      },
      {
        "station": "Sunnyvale",
        "time": "1:28 PM",
        "minutes": 808
      },
      {
        "station": "Lawrence - - - -",
        "time": "1:31 PM",
        "minutes": 811
      },
      {
        "station": "Santa Clara - - - -",
        "time": "1:36 PM",
        "minutes": 816
      },
      {
        "station": "San Jose Diridon",
        "time": "1:42 PM",
        "minutes": 822
      }
    ]
  },
  {
    "trainNum": "132",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "12:55 PM",
        "minutes": 775
      },
      {
        "station": "22 Street",
        "time": "1:00 PM",
        "minutes": 780
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "1:04 PM",
        "minutes": 784
      },
      {
        "station": "S. San Francisco",
        "time": "1:10 PM",
        "minutes": 790
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "1:13 PM",
        "minutes": 793
      },
      {
        "station": "Millbrae",
        "time": "1:16 PM",
        "minutes": 796
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "1:20 PM",
        "minutes": 800
      },
      {
        "station": "San Mateo",
        "time": "1:23 PM",
        "minutes": 803
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "1:25 PM",
        "minutes": 805
      },
      {
        "station": "Hillsdale",
        "time": "1:27 PM",
        "minutes": 807
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "1:31 PM",
        "minutes": 811
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "1:33 PM",
        "minutes": 813
      },
      {
        "station": "Redwood City",
        "time": "1:37 PM",
        "minutes": 817
      },
      {
        "station": "Menlo Park - - - -",
        "time": "1:41 PM",
        "minutes": 821
      },
      {
        "station": "Palo Alto",
        "time": "1:44 PM",
        "minutes": 824
      },
      {
        "station": "California Avenue - - - -",
        "time": "1:47 PM",
        "minutes": 827
      },
      {
        "station": "San Antonio - - - -",
        "time": "1:51 PM",
        "minutes": 831
      },
      {
        "station": "Mountain View",
        "time": "1:54 PM",
        "minutes": 834
      },
      {
        "station": "Sunnyvale",
        "time": "1:58 PM",
        "minutes": 838
      },
      {
        "station": "Lawrence - - - -",
        "time": "2:01 PM",
        "minutes": 841
      },
      {
        "station": "Santa Clara - - - -",
        "time": "2:06 PM",
        "minutes": 846
      },
      {
        "station": "San Jose Diridon",
        "time": "2:13 PM",
        "minutes": 853
      },
      {
        "station": "Tamien",
        "time": "2:18 PM",
        "minutes": 858
      }
    ]
  },
  {
    "trainNum": "134",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "1:25 PM",
        "minutes": 805
      },
      {
        "station": "22 Street",
        "time": "1:30 PM",
        "minutes": 810
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "1:34 PM",
        "minutes": 814
      },
      {
        "station": "S. San Francisco",
        "time": "1:40 PM",
        "minutes": 820
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "1:43 PM",
        "minutes": 823
      },
      {
        "station": "Millbrae",
        "time": "1:46 PM",
        "minutes": 826
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "1:50 PM",
        "minutes": 830
      },
      {
        "station": "San Mateo",
        "time": "1:53 PM",
        "minutes": 833
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "1:55 PM",
        "minutes": 835
      },
      {
        "station": "Hillsdale",
        "time": "1:57 PM",
        "minutes": 837
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "2:01 PM",
        "minutes": 841
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "2:03 PM",
        "minutes": 843
      },
      {
        "station": "Redwood City",
        "time": "2:07 PM",
        "minutes": 847
      },
      {
        "station": "Menlo Park - - - -",
        "time": "2:11 PM",
        "minutes": 851
      },
      {
        "station": "Palo Alto",
        "time": "2:14 PM",
        "minutes": 854
      },
      {
        "station": "California Avenue - - - -",
        "time": "2:17 PM",
        "minutes": 857
      },
      {
        "station": "San Antonio - - - -",
        "time": "2:21 PM",
        "minutes": 861
      },
      {
        "station": "Mountain View",
        "time": "2:24 PM",
        "minutes": 864
      },
      {
        "station": "Sunnyvale",
        "time": "2:28 PM",
        "minutes": 868
      },
      {
        "station": "Lawrence - - - -",
        "time": "2:31 PM",
        "minutes": 871
      },
      {
        "station": "Santa Clara - - - -",
        "time": "2:36 PM",
        "minutes": 876
      },
      {
        "station": "San Jose Diridon",
        "time": "2:42 PM",
        "minutes": 882
      }
    ]
  },
  {
    "trainNum": "136",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "1:55 PM",
        "minutes": 835
      },
      {
        "station": "22 Street",
        "time": "2:00 PM",
        "minutes": 840
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "2:04 PM",
        "minutes": 844
      },
      {
        "station": "S. San Francisco",
        "time": "2:10 PM",
        "minutes": 850
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "2:13 PM",
        "minutes": 853
      },
      {
        "station": "Millbrae",
        "time": "2:16 PM",
        "minutes": 856
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "2:20 PM",
        "minutes": 860
      },
      {
        "station": "San Mateo",
        "time": "2:23 PM",
        "minutes": 863
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "2:25 PM",
        "minutes": 865
      },
      {
        "station": "Hillsdale",
        "time": "2:27 PM",
        "minutes": 867
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "2:31 PM",
        "minutes": 871
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "2:33 PM",
        "minutes": 873
      },
      {
        "station": "Redwood City",
        "time": "2:37 PM",
        "minutes": 877
      },
      {
        "station": "Menlo Park - - - -",
        "time": "2:41 PM",
        "minutes": 881
      },
      {
        "station": "Palo Alto",
        "time": "2:44 PM",
        "minutes": 884
      },
      {
        "station": "California Avenue - - - -",
        "time": "2:47 PM",
        "minutes": 887
      },
      {
        "station": "San Antonio - - - -",
        "time": "2:51 PM",
        "minutes": 891
      },
      {
        "station": "Mountain View",
        "time": "2:54 PM",
        "minutes": 894
      },
      {
        "station": "Sunnyvale",
        "time": "2:58 PM",
        "minutes": 898
      },
      {
        "station": "Lawrence - - - -",
        "time": "3:01 PM",
        "minutes": 901
      },
      {
        "station": "Santa Clara - - - -",
        "time": "3:06 PM",
        "minutes": 906
      },
      {
        "station": "San Jose Diridon",
        "time": "3:13 PM",
        "minutes": 913
      },
      {
        "station": "Tamien",
        "time": "3:18 PM",
        "minutes": 918
      }
    ]
  },
  {
    "trainNum": "138",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "2:25 PM",
        "minutes": 865
      },
      {
        "station": "22 Street",
        "time": "2:30 PM",
        "minutes": 870
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "2:34 PM",
        "minutes": 874
      },
      {
        "station": "S. San Francisco",
        "time": "2:40 PM",
        "minutes": 880
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "2:43 PM",
        "minutes": 883
      },
      {
        "station": "Millbrae",
        "time": "2:46 PM",
        "minutes": 886
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "2:50 PM",
        "minutes": 890
      },
      {
        "station": "San Mateo",
        "time": "2:53 PM",
        "minutes": 893
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "2:55 PM",
        "minutes": 895
      },
      {
        "station": "Hillsdale",
        "time": "2:57 PM",
        "minutes": 897
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "3:01 PM",
        "minutes": 901
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "3:03 PM",
        "minutes": 903
      },
      {
        "station": "Redwood City",
        "time": "3:07 PM",
        "minutes": 907
      },
      {
        "station": "Menlo Park - - - -",
        "time": "3:11 PM",
        "minutes": 911
      },
      {
        "station": "Palo Alto",
        "time": "3:14 PM",
        "minutes": 914
      },
      {
        "station": "California Avenue - - - -",
        "time": "3:17 PM",
        "minutes": 917
      },
      {
        "station": "San Antonio - - - -",
        "time": "3:21 PM",
        "minutes": 921
      },
      {
        "station": "Mountain View",
        "time": "3:24 PM",
        "minutes": 924
      },
      {
        "station": "Sunnyvale",
        "time": "3:28 PM",
        "minutes": 928
      },
      {
        "station": "Lawrence - - - -",
        "time": "3:31 PM",
        "minutes": 931
      },
      {
        "station": "Santa Clara - - - -",
        "time": "3:36 PM",
        "minutes": 936
      },
      {
        "station": "San Jose Diridon",
        "time": "3:42 PM",
        "minutes": 942
      }
    ]
  },
  {
    "trainNum": "140",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "2:55 PM",
        "minutes": 895
      },
      {
        "station": "22 Street",
        "time": "3:00 PM",
        "minutes": 900
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "3:04 PM",
        "minutes": 904
      },
      {
        "station": "S. San Francisco",
        "time": "3:10 PM",
        "minutes": 910
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "3:13 PM",
        "minutes": 913
      },
      {
        "station": "Millbrae",
        "time": "3:16 PM",
        "minutes": 916
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "3:20 PM",
        "minutes": 920
      },
      {
        "station": "San Mateo",
        "time": "3:23 PM",
        "minutes": 923
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "3:25 PM",
        "minutes": 925
      },
      {
        "station": "Hillsdale",
        "time": "3:27 PM",
        "minutes": 927
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "3:31 PM",
        "minutes": 931
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "3:33 PM",
        "minutes": 933
      },
      {
        "station": "Redwood City",
        "time": "3:37 PM",
        "minutes": 937
      },
      {
        "station": "Menlo Park - - - -",
        "time": "3:41 PM",
        "minutes": 941
      },
      {
        "station": "Palo Alto",
        "time": "3:44 PM",
        "minutes": 944
      },
      {
        "station": "California Avenue - - - -",
        "time": "3:47 PM",
        "minutes": 947
      },
      {
        "station": "San Antonio - - - -",
        "time": "3:51 PM",
        "minutes": 951
      },
      {
        "station": "Mountain View",
        "time": "3:54 PM",
        "minutes": 954
      },
      {
        "station": "Sunnyvale",
        "time": "3:58 PM",
        "minutes": 958
      },
      {
        "station": "Lawrence - - - -",
        "time": "4:01 PM",
        "minutes": 961
      },
      {
        "station": "Santa Clara - - - -",
        "time": "4:06 PM",
        "minutes": 966
      },
      {
        "station": "College Park - - - - - - - - - - - - - - - - - - - - - - - - -",
        "time": "4:08 PM",
        "minutes": 968
      },
      {
        "station": "San Jose Diridon",
        "time": "4:14 PM",
        "minutes": 974
      },
      {
        "station": "Tamien",
        "time": "4:19 PM",
        "minutes": 979
      }
    ]
  },
  {
    "trainNum": "514",
    "type": "Express",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "3:20 PM",
        "minutes": 920
      },
      {
        "station": "22 Street",
        "time": "3:24 PM",
        "minutes": 924
      },
      {
        "station": "S. San Francisco",
        "time": "3:32 PM",
        "minutes": 932
      },
      {
        "station": "Millbrae",
        "time": "3:38 PM",
        "minutes": 938
      },
      {
        "station": "San Mateo",
        "time": "3:43 PM",
        "minutes": 943
      },
      {
        "station": "Hillsdale",
        "time": "3:46 PM",
        "minutes": 946
      },
      {
        "station": "Redwood City",
        "time": "3:53 PM",
        "minutes": 953
      },
      {
        "station": "Palo Alto",
        "time": "3:59 PM",
        "minutes": 959
      },
      {
        "station": "Mountain View",
        "time": "4:06 PM",
        "minutes": 966
      },
      {
        "station": "Sunnyvale",
        "time": "4:09 PM",
        "minutes": 969
      },
      {
        "station": "San Jose Diridon",
        "time": "4:20 PM",
        "minutes": 980
      }
    ]
  },
  {
    "trainNum": "814",
    "type": "South County Connector",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "4:23 PM",
        "minutes": 983
      },
      {
        "station": "Tamien",
        "time": "4:28 PM",
        "minutes": 988
      },
      {
        "station": "Capitol",
        "time": "4:34 PM",
        "minutes": 994
      },
      {
        "station": "Blossom Hill",
        "time": "4:40 PM",
        "minutes": 1000
      },
      {
        "station": "Morgan Hill",
        "time": "4:53 PM",
        "minutes": 1013
      },
      {
        "station": "San Martin",
        "time": "5:00 PM",
        "minutes": 1020
      },
      {
        "station": "Gilroy",
        "time": "5:11 PM",
        "minutes": 1031
      }
    ]
  },
  {
    "trainNum": "142",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "3:25 PM",
        "minutes": 925
      },
      {
        "station": "22 Street",
        "time": "3:30 PM",
        "minutes": 930
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "3:34 PM",
        "minutes": 934
      },
      {
        "station": "S. San Francisco",
        "time": "3:40 PM",
        "minutes": 940
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "3:43 PM",
        "minutes": 943
      },
      {
        "station": "Millbrae",
        "time": "3:46 PM",
        "minutes": 946
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "3:50 PM",
        "minutes": 950
      },
      {
        "station": "San Mateo",
        "time": "3:53 PM",
        "minutes": 953
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "3:55 PM",
        "minutes": 955
      },
      {
        "station": "Hillsdale",
        "time": "3:57 PM",
        "minutes": 957
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "4:01 PM",
        "minutes": 961
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "4:03 PM",
        "minutes": 963
      },
      {
        "station": "Redwood City",
        "time": "4:07 PM",
        "minutes": 967
      },
      {
        "station": "Menlo Park - - -",
        "time": "4:11 PM",
        "minutes": 971
      },
      {
        "station": "Palo Alto",
        "time": "4:14 PM",
        "minutes": 974
      },
      {
        "station": "California Avenue - - -",
        "time": "4:17 PM",
        "minutes": 977
      },
      {
        "station": "San Antonio - - -",
        "time": "4:21 PM",
        "minutes": 981
      },
      {
        "station": "Mountain View",
        "time": "4:24 PM",
        "minutes": 984
      },
      {
        "station": "Sunnyvale",
        "time": "4:28 PM",
        "minutes": 988
      },
      {
        "station": "Lawrence - - -",
        "time": "4:31 PM",
        "minutes": 991
      },
      {
        "station": "Santa Clara - - -",
        "time": "4:36 PM",
        "minutes": 996
      },
      {
        "station": "San Jose Diridon",
        "time": "4:42 PM",
        "minutes": 1002
      }
    ]
  },
  {
    "trainNum": "416",
    "type": "Limited",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "3:48 PM",
        "minutes": 948
      },
      {
        "station": "22 Street",
        "time": "3:53 PM",
        "minutes": 953
      },
      {
        "station": "S. San Francisco",
        "time": "4:01 PM",
        "minutes": 961
      },
      {
        "station": "Millbrae",
        "time": "4:07 PM",
        "minutes": 967
      },
      {
        "station": "San Mateo",
        "time": "4:12 PM",
        "minutes": 972
      },
      {
        "station": "Hillsdale",
        "time": "4:15 PM",
        "minutes": 975
      },
      {
        "station": "Redwood City",
        "time": "4:22 PM",
        "minutes": 982
      },
      {
        "station": "Menlo Park - - -",
        "time": "4:26 PM",
        "minutes": 986
      },
      {
        "station": "Palo Alto",
        "time": "4:29 PM",
        "minutes": 989
      },
      {
        "station": "California Avenue - - -",
        "time": "4:32 PM",
        "minutes": 992
      },
      {
        "station": "San Antonio - - -",
        "time": "4:36 PM",
        "minutes": 996
      },
      {
        "station": "Mountain View",
        "time": "4:39 PM",
        "minutes": 999
      },
      {
        "station": "Sunnyvale",
        "time": "4:43 PM",
        "minutes": 1003
      },
      {
        "station": "Lawrence - - -",
        "time": "4:46 PM",
        "minutes": 1006
      },
      {
        "station": "Santa Clara - - -",
        "time": "4:51 PM",
        "minutes": 1011
      },
      {
        "station": "San Jose Diridon",
        "time": "4:58 PM",
        "minutes": 1018
      }
    ]
  },
  {
    "trainNum": "816",
    "type": "South County Connector",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "5:01 PM",
        "minutes": 1021
      },
      {
        "station": "Tamien",
        "time": "5:06 PM",
        "minutes": 1026
      },
      {
        "station": "Capitol",
        "time": "5:12 PM",
        "minutes": 1032
      },
      {
        "station": "Blossom Hill",
        "time": "5:18 PM",
        "minutes": 1038
      },
      {
        "station": "Morgan Hill",
        "time": "5:31 PM",
        "minutes": 1051
      },
      {
        "station": "San Martin",
        "time": "5:38 PM",
        "minutes": 1058
      },
      {
        "station": "Gilroy",
        "time": "5:49 PM",
        "minutes": 1069
      },
      {
        "station": "8XX South County Connector",
        "time": "4:58 PM",
        "minutes": 1018
      }
    ]
  },
  {
    "trainNum": "144",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "3:55 PM",
        "minutes": 955
      },
      {
        "station": "22 Street",
        "time": "4:00 PM",
        "minutes": 960
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "4:04 PM",
        "minutes": 964
      },
      {
        "station": "S. San Francisco",
        "time": "4:10 PM",
        "minutes": 970
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "4:13 PM",
        "minutes": 973
      },
      {
        "station": "Millbrae",
        "time": "4:16 PM",
        "minutes": 976
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "4:20 PM",
        "minutes": 980
      },
      {
        "station": "San Mateo",
        "time": "4:23 PM",
        "minutes": 983
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "4:25 PM",
        "minutes": 985
      },
      {
        "station": "Hillsdale",
        "time": "4:27 PM",
        "minutes": 987
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "4:31 PM",
        "minutes": 991
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "4:33 PM",
        "minutes": 993
      },
      {
        "station": "Redwood City",
        "time": "4:37 PM",
        "minutes": 997
      },
      {
        "station": "Menlo Park - - -",
        "time": "4:41 PM",
        "minutes": 1001
      },
      {
        "station": "Palo Alto",
        "time": "4:44 PM",
        "minutes": 1004
      },
      {
        "station": "California Avenue - - -",
        "time": "4:47 PM",
        "minutes": 1007
      },
      {
        "station": "San Antonio - - -",
        "time": "4:51 PM",
        "minutes": 1011
      },
      {
        "station": "Mountain View",
        "time": "4:54 PM",
        "minutes": 1014
      },
      {
        "station": "Sunnyvale",
        "time": "4:58 PM",
        "minutes": 1018
      },
      {
        "station": "Lawrence - - -",
        "time": "5:01 PM",
        "minutes": 1021
      },
      {
        "station": "Santa Clara - - -",
        "time": "5:06 PM",
        "minutes": 1026
      },
      {
        "station": "San Jose Diridon",
        "time": "5:13 PM",
        "minutes": 1033
      },
      {
        "station": "Tamien",
        "time": "5:18 PM",
        "minutes": 1038
      },
      {
        "station": "8XX South County Connector",
        "time": "5:01 PM",
        "minutes": 1021
      }
    ]
  },
  {
    "trainNum": "518",
    "type": "Express",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "4:20 PM",
        "minutes": 980
      },
      {
        "station": "22 Street",
        "time": "4:24 PM",
        "minutes": 984
      },
      {
        "station": "S. San Francisco",
        "time": "4:32 PM",
        "minutes": 992
      },
      {
        "station": "Millbrae",
        "time": "4:38 PM",
        "minutes": 998
      },
      {
        "station": "San Mateo",
        "time": "4:43 PM",
        "minutes": 1003
      },
      {
        "station": "Hillsdale",
        "time": "4:46 PM",
        "minutes": 1006
      },
      {
        "station": "Redwood City",
        "time": "4:53 PM",
        "minutes": 1013
      },
      {
        "station": "Palo Alto",
        "time": "4:59 PM",
        "minutes": 1019
      },
      {
        "station": "Mountain View",
        "time": "5:06 PM",
        "minutes": 1026
      },
      {
        "station": "Sunnyvale",
        "time": "5:09 PM",
        "minutes": 1029
      },
      {
        "station": "San Jose Diridon",
        "time": "5:20 PM",
        "minutes": 1040
      }
    ]
  },
  {
    "trainNum": "146",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "4:25 PM",
        "minutes": 985
      },
      {
        "station": "22 Street",
        "time": "4:30 PM",
        "minutes": 990
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "4:34 PM",
        "minutes": 994
      },
      {
        "station": "S. San Francisco",
        "time": "4:40 PM",
        "minutes": 1000
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "4:43 PM",
        "minutes": 1003
      },
      {
        "station": "Millbrae",
        "time": "4:46 PM",
        "minutes": 1006
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "4:50 PM",
        "minutes": 1010
      },
      {
        "station": "San Mateo",
        "time": "4:53 PM",
        "minutes": 1013
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "4:55 PM",
        "minutes": 1015
      },
      {
        "station": "Hillsdale",
        "time": "4:57 PM",
        "minutes": 1017
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "5:01 PM",
        "minutes": 1021
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "5:03 PM",
        "minutes": 1023
      },
      {
        "station": "Redwood City",
        "time": "5:07 PM",
        "minutes": 1027
      },
      {
        "station": "Menlo Park - - -",
        "time": "5:11 PM",
        "minutes": 1031
      },
      {
        "station": "Palo Alto",
        "time": "5:14 PM",
        "minutes": 1034
      },
      {
        "station": "California Avenue - - -",
        "time": "5:17 PM",
        "minutes": 1037
      },
      {
        "station": "San Antonio - - -",
        "time": "5:21 PM",
        "minutes": 1041
      },
      {
        "station": "Mountain View",
        "time": "5:24 PM",
        "minutes": 1044
      },
      {
        "station": "Sunnyvale",
        "time": "5:28 PM",
        "minutes": 1048
      },
      {
        "station": "Lawrence - - -",
        "time": "5:31 PM",
        "minutes": 1051
      },
      {
        "station": "Santa Clara - - -",
        "time": "5:36 PM",
        "minutes": 1056
      },
      {
        "station": "San Jose Diridon",
        "time": "5:42 PM",
        "minutes": 1062
      }
    ]
  },
  {
    "trainNum": "420",
    "type": "Limited",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "4:48 PM",
        "minutes": 1008
      },
      {
        "station": "22 Street",
        "time": "4:53 PM",
        "minutes": 1013
      },
      {
        "station": "S. San Francisco",
        "time": "5:01 PM",
        "minutes": 1021
      },
      {
        "station": "Millbrae",
        "time": "5:07 PM",
        "minutes": 1027
      },
      {
        "station": "San Mateo",
        "time": "5:12 PM",
        "minutes": 1032
      },
      {
        "station": "Hillsdale",
        "time": "5:15 PM",
        "minutes": 1035
      },
      {
        "station": "Redwood City",
        "time": "5:22 PM",
        "minutes": 1042
      },
      {
        "station": "Menlo Park - - -",
        "time": "5:26 PM",
        "minutes": 1046
      },
      {
        "station": "Palo Alto",
        "time": "5:29 PM",
        "minutes": 1049
      },
      {
        "station": "California Avenue - - -",
        "time": "5:32 PM",
        "minutes": 1052
      },
      {
        "station": "San Antonio - - -",
        "time": "5:36 PM",
        "minutes": 1056
      },
      {
        "station": "Mountain View",
        "time": "5:39 PM",
        "minutes": 1059
      },
      {
        "station": "Sunnyvale",
        "time": "5:43 PM",
        "minutes": 1063
      },
      {
        "station": "Lawrence - - -",
        "time": "5:46 PM",
        "minutes": 1066
      },
      {
        "station": "Santa Clara - - -",
        "time": "5:51 PM",
        "minutes": 1071
      },
      {
        "station": "San Jose Diridon",
        "time": "5:58 PM",
        "minutes": 1078
      }
    ]
  },
  {
    "trainNum": "820",
    "type": "South County Connector",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "6:01 PM",
        "minutes": 1081
      },
      {
        "station": "Tamien",
        "time": "6:06 PM",
        "minutes": 1086
      },
      {
        "station": "Capitol",
        "time": "6:12 PM",
        "minutes": 1092
      },
      {
        "station": "Blossom Hill",
        "time": "6:18 PM",
        "minutes": 1098
      },
      {
        "station": "Morgan Hill",
        "time": "6:31 PM",
        "minutes": 1111
      },
      {
        "station": "San Martin",
        "time": "6:38 PM",
        "minutes": 1118
      },
      {
        "station": "Gilroy",
        "time": "6:49 PM",
        "minutes": 1129
      }
    ]
  },
  {
    "trainNum": "148",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "4:55 PM",
        "minutes": 1015
      },
      {
        "station": "22 Street",
        "time": "5:00 PM",
        "minutes": 1020
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "5:04 PM",
        "minutes": 1024
      },
      {
        "station": "S. San Francisco",
        "time": "5:10 PM",
        "minutes": 1030
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "5:13 PM",
        "minutes": 1033
      },
      {
        "station": "Millbrae",
        "time": "5:16 PM",
        "minutes": 1036
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "5:20 PM",
        "minutes": 1040
      },
      {
        "station": "San Mateo",
        "time": "5:23 PM",
        "minutes": 1043
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "5:25 PM",
        "minutes": 1045
      },
      {
        "station": "Hillsdale",
        "time": "5:27 PM",
        "minutes": 1047
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "5:31 PM",
        "minutes": 1051
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "5:33 PM",
        "minutes": 1053
      },
      {
        "station": "Redwood City",
        "time": "5:37 PM",
        "minutes": 1057
      },
      {
        "station": "Menlo Park - - -",
        "time": "5:41 PM",
        "minutes": 1061
      },
      {
        "station": "Palo Alto",
        "time": "5:44 PM",
        "minutes": 1064
      },
      {
        "station": "California Avenue - - -",
        "time": "5:47 PM",
        "minutes": 1067
      },
      {
        "station": "San Antonio - - -",
        "time": "5:51 PM",
        "minutes": 1071
      },
      {
        "station": "Mountain View",
        "time": "5:54 PM",
        "minutes": 1074
      },
      {
        "station": "Sunnyvale",
        "time": "5:58 PM",
        "minutes": 1078
      },
      {
        "station": "Lawrence - - -",
        "time": "6:01 PM",
        "minutes": 1081
      },
      {
        "station": "Santa Clara - - -",
        "time": "6:06 PM",
        "minutes": 1086
      },
      {
        "station": "San Jose Diridon",
        "time": "6:13 PM",
        "minutes": 1093
      },
      {
        "station": "Tamien",
        "time": "6:18 PM",
        "minutes": 1098
      }
    ]
  },
  {
    "trainNum": "522",
    "type": "Express",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "5:20 PM",
        "minutes": 1040
      },
      {
        "station": "22 Street",
        "time": "5:24 PM",
        "minutes": 1044
      },
      {
        "station": "S. San Francisco",
        "time": "5:32 PM",
        "minutes": 1052
      },
      {
        "station": "Millbrae",
        "time": "5:38 PM",
        "minutes": 1058
      },
      {
        "station": "San Mateo",
        "time": "5:43 PM",
        "minutes": 1063
      },
      {
        "station": "Hillsdale",
        "time": "5:46 PM",
        "minutes": 1066
      },
      {
        "station": "Redwood City",
        "time": "5:53 PM",
        "minutes": 1073
      },
      {
        "station": "Palo Alto",
        "time": "5:59 PM",
        "minutes": 1079
      },
      {
        "station": "Mountain View",
        "time": "6:06 PM",
        "minutes": 1086
      },
      {
        "station": "Sunnyvale",
        "time": "6:09 PM",
        "minutes": 1089
      },
      {
        "station": "San Jose Diridon",
        "time": "6:20 PM",
        "minutes": 1100
      }
    ]
  },
  {
    "trainNum": "822",
    "type": "South County Connector",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Jose Diridon",
        "time": "6:23 PM",
        "minutes": 1103
      },
      {
        "station": "Tamien",
        "time": "6:28 PM",
        "minutes": 1108
      },
      {
        "station": "Capitol",
        "time": "6:34 PM",
        "minutes": 1114
      },
      {
        "station": "Blossom Hill",
        "time": "6:40 PM",
        "minutes": 1120
      },
      {
        "station": "Morgan Hill",
        "time": "6:53 PM",
        "minutes": 1133
      },
      {
        "station": "San Martin",
        "time": "7:00 PM",
        "minutes": 1140
      },
      {
        "station": "Gilroy",
        "time": "7:11 PM",
        "minutes": 1151
      }
    ]
  },
  {
    "trainNum": "150",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "5:25 PM",
        "minutes": 1045
      },
      {
        "station": "22 Street",
        "time": "5:30 PM",
        "minutes": 1050
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "5:34 PM",
        "minutes": 1054
      },
      {
        "station": "S. San Francisco",
        "time": "5:40 PM",
        "minutes": 1060
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "5:43 PM",
        "minutes": 1063
      },
      {
        "station": "Millbrae",
        "time": "5:46 PM",
        "minutes": 1066
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "5:50 PM",
        "minutes": 1070
      },
      {
        "station": "San Mateo",
        "time": "5:53 PM",
        "minutes": 1073
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "5:55 PM",
        "minutes": 1075
      },
      {
        "station": "Hillsdale",
        "time": "5:57 PM",
        "minutes": 1077
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "6:01 PM",
        "minutes": 1081
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "6:03 PM",
        "minutes": 1083
      },
      {
        "station": "Redwood City",
        "time": "6:07 PM",
        "minutes": 1087
      },
      {
        "station": "Menlo Park - - -",
        "time": "6:11 PM",
        "minutes": 1091
      },
      {
        "station": "Palo Alto",
        "time": "6:14 PM",
        "minutes": 1094
      },
      {
        "station": "California Avenue - - -",
        "time": "6:17 PM",
        "minutes": 1097
      },
      {
        "station": "San Antonio - - -",
        "time": "6:21 PM",
        "minutes": 1101
      },
      {
        "station": "Mountain View",
        "time": "6:24 PM",
        "minutes": 1104
      },
      {
        "station": "Sunnyvale",
        "time": "6:28 PM",
        "minutes": 1108
      },
      {
        "station": "Lawrence - - -",
        "time": "6:31 PM",
        "minutes": 1111
      },
      {
        "station": "Santa Clara - - -",
        "time": "6:36 PM",
        "minutes": 1116
      },
      {
        "station": "San Jose Diridon",
        "time": "6:42 PM",
        "minutes": 1122
      }
    ]
  },
  {
    "trainNum": "424",
    "type": "Limited",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "5:48 PM",
        "minutes": 1068
      },
      {
        "station": "22 Street",
        "time": "5:53 PM",
        "minutes": 1073
      },
      {
        "station": "S. San Francisco",
        "time": "6:01 PM",
        "minutes": 1081
      },
      {
        "station": "Millbrae",
        "time": "6:07 PM",
        "minutes": 1087
      },
      {
        "station": "San Mateo",
        "time": "6:12 PM",
        "minutes": 1092
      },
      {
        "station": "Hillsdale",
        "time": "6:15 PM",
        "minutes": 1095
      },
      {
        "station": "Redwood City",
        "time": "6:22 PM",
        "minutes": 1102
      },
      {
        "station": "Menlo Park - - -",
        "time": "6:26 PM",
        "minutes": 1106
      },
      {
        "station": "Palo Alto",
        "time": "6:29 PM",
        "minutes": 1109
      },
      {
        "station": "California Avenue - - -",
        "time": "6:32 PM",
        "minutes": 1112
      },
      {
        "station": "San Antonio - - -",
        "time": "6:36 PM",
        "minutes": 1116
      },
      {
        "station": "Mountain View",
        "time": "6:39 PM",
        "minutes": 1119
      },
      {
        "station": "Sunnyvale",
        "time": "6:43 PM",
        "minutes": 1123
      },
      {
        "station": "Lawrence - - -",
        "time": "6:46 PM",
        "minutes": 1126
      },
      {
        "station": "Santa Clara - - -",
        "time": "6:51 PM",
        "minutes": 1131
      },
      {
        "station": "San Jose Diridon",
        "time": "6:58 PM",
        "minutes": 1138
      }
    ]
  },
  {
    "trainNum": "152",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "5:55 PM",
        "minutes": 1075
      },
      {
        "station": "22 Street",
        "time": "6:00 PM",
        "minutes": 1080
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "6:04 PM",
        "minutes": 1084
      },
      {
        "station": "S. San Francisco",
        "time": "6:10 PM",
        "minutes": 1090
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "6:13 PM",
        "minutes": 1093
      },
      {
        "station": "Millbrae",
        "time": "6:16 PM",
        "minutes": 1096
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "6:20 PM",
        "minutes": 1100
      },
      {
        "station": "San Mateo",
        "time": "6:23 PM",
        "minutes": 1103
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "6:25 PM",
        "minutes": 1105
      },
      {
        "station": "Hillsdale",
        "time": "6:27 PM",
        "minutes": 1107
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "6:31 PM",
        "minutes": 1111
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "6:33 PM",
        "minutes": 1113
      },
      {
        "station": "Redwood City",
        "time": "6:37 PM",
        "minutes": 1117
      },
      {
        "station": "Menlo Park - - -",
        "time": "6:41 PM",
        "minutes": 1121
      },
      {
        "station": "Palo Alto",
        "time": "6:44 PM",
        "minutes": 1124
      },
      {
        "station": "California Avenue - - -",
        "time": "6:47 PM",
        "minutes": 1127
      },
      {
        "station": "San Antonio - - -",
        "time": "6:51 PM",
        "minutes": 1131
      },
      {
        "station": "Mountain View",
        "time": "6:54 PM",
        "minutes": 1134
      },
      {
        "station": "Sunnyvale",
        "time": "6:58 PM",
        "minutes": 1138
      },
      {
        "station": "Lawrence - - -",
        "time": "7:01 PM",
        "minutes": 1141
      },
      {
        "station": "Santa Clara - - -",
        "time": "7:06 PM",
        "minutes": 1146
      },
      {
        "station": "San Jose Diridon",
        "time": "7:13 PM",
        "minutes": 1153
      },
      {
        "station": "Tamien",
        "time": "7:18 PM",
        "minutes": 1158
      }
    ]
  },
  {
    "trainNum": "526",
    "type": "Express",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "6:20 PM",
        "minutes": 1100
      },
      {
        "station": "22 Street",
        "time": "6:24 PM",
        "minutes": 1104
      },
      {
        "station": "S. San Francisco",
        "time": "6:32 PM",
        "minutes": 1112
      },
      {
        "station": "Millbrae",
        "time": "6:38 PM",
        "minutes": 1118
      },
      {
        "station": "San Mateo",
        "time": "6:43 PM",
        "minutes": 1123
      },
      {
        "station": "Hillsdale",
        "time": "6:46 PM",
        "minutes": 1126
      },
      {
        "station": "Redwood City",
        "time": "6:53 PM",
        "minutes": 1133
      },
      {
        "station": "Palo Alto",
        "time": "6:59 PM",
        "minutes": 1139
      },
      {
        "station": "Mountain View",
        "time": "7:06 PM",
        "minutes": 1146
      },
      {
        "station": "Sunnyvale",
        "time": "7:09 PM",
        "minutes": 1149
      },
      {
        "station": "San Jose Diridon",
        "time": "7:20 PM",
        "minutes": 1160
      }
    ]
  },
  {
    "trainNum": "154",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "6:25 PM",
        "minutes": 1105
      },
      {
        "station": "22 Street",
        "time": "6:30 PM",
        "minutes": 1110
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "6:34 PM",
        "minutes": 1114
      },
      {
        "station": "S. San Francisco",
        "time": "6:40 PM",
        "minutes": 1120
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "6:43 PM",
        "minutes": 1123
      },
      {
        "station": "Millbrae",
        "time": "6:46 PM",
        "minutes": 1126
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "6:50 PM",
        "minutes": 1130
      },
      {
        "station": "San Mateo",
        "time": "6:53 PM",
        "minutes": 1133
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "6:55 PM",
        "minutes": 1135
      },
      {
        "station": "Hillsdale",
        "time": "6:57 PM",
        "minutes": 1137
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "7:01 PM",
        "minutes": 1141
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "7:03 PM",
        "minutes": 1143
      },
      {
        "station": "Redwood City",
        "time": "7:07 PM",
        "minutes": 1147
      },
      {
        "station": "Menlo Park - - -",
        "time": "7:11 PM",
        "minutes": 1151
      },
      {
        "station": "Palo Alto",
        "time": "7:14 PM",
        "minutes": 1154
      },
      {
        "station": "California Avenue - - -",
        "time": "7:17 PM",
        "minutes": 1157
      },
      {
        "station": "San Antonio - - -",
        "time": "7:21 PM",
        "minutes": 1161
      },
      {
        "station": "Mountain View",
        "time": "7:24 PM",
        "minutes": 1164
      },
      {
        "station": "Sunnyvale",
        "time": "7:28 PM",
        "minutes": 1168
      },
      {
        "station": "Lawrence - - -",
        "time": "7:31 PM",
        "minutes": 1171
      },
      {
        "station": "Santa Clara - - -",
        "time": "7:36 PM",
        "minutes": 1176
      },
      {
        "station": "San Jose Diridon",
        "time": "7:42 PM",
        "minutes": 1182
      }
    ]
  },
  {
    "trainNum": "428",
    "type": "Limited",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "6:48 PM",
        "minutes": 1128
      },
      {
        "station": "22 Street",
        "time": "6:53 PM",
        "minutes": 1133
      },
      {
        "station": "S. San Francisco",
        "time": "7:01 PM",
        "minutes": 1141
      },
      {
        "station": "Millbrae",
        "time": "7:07 PM",
        "minutes": 1147
      },
      {
        "station": "San Mateo",
        "time": "7:12 PM",
        "minutes": 1152
      },
      {
        "station": "Hillsdale",
        "time": "7:15 PM",
        "minutes": 1155
      },
      {
        "station": "Redwood City",
        "time": "7:22 PM",
        "minutes": 1162
      },
      {
        "station": "Menlo Park - - -",
        "time": "7:26 PM",
        "minutes": 1166
      },
      {
        "station": "Palo Alto",
        "time": "7:29 PM",
        "minutes": 1169
      },
      {
        "station": "California Avenue - - -",
        "time": "7:32 PM",
        "minutes": 1172
      },
      {
        "station": "San Antonio - - -",
        "time": "7:36 PM",
        "minutes": 1176
      },
      {
        "station": "Mountain View",
        "time": "7:39 PM",
        "minutes": 1179
      },
      {
        "station": "Sunnyvale",
        "time": "7:43 PM",
        "minutes": 1183
      },
      {
        "station": "Lawrence - - -",
        "time": "7:46 PM",
        "minutes": 1186
      },
      {
        "station": "Santa Clara - - -",
        "time": "7:51 PM",
        "minutes": 1191
      },
      {
        "station": "San Jose Diridon",
        "time": "7:58 PM",
        "minutes": 1198
      }
    ]
  },
  {
    "trainNum": "156",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "6:55 PM",
        "minutes": 1135
      },
      {
        "station": "22 Street",
        "time": "7:00 PM",
        "minutes": 1140
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "7:04 PM",
        "minutes": 1144
      },
      {
        "station": "S. San Francisco",
        "time": "7:10 PM",
        "minutes": 1150
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "7:13 PM",
        "minutes": 1153
      },
      {
        "station": "Millbrae",
        "time": "7:16 PM",
        "minutes": 1156
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "7:20 PM",
        "minutes": 1160
      },
      {
        "station": "San Mateo",
        "time": "7:23 PM",
        "minutes": 1163
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "7:25 PM",
        "minutes": 1165
      },
      {
        "station": "Hillsdale",
        "time": "7:27 PM",
        "minutes": 1167
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "7:31 PM",
        "minutes": 1171
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "7:33 PM",
        "minutes": 1173
      },
      {
        "station": "Redwood City",
        "time": "7:37 PM",
        "minutes": 1177
      },
      {
        "station": "Menlo Park - - -",
        "time": "7:41 PM",
        "minutes": 1181
      },
      {
        "station": "Palo Alto",
        "time": "7:44 PM",
        "minutes": 1184
      },
      {
        "station": "California Avenue - - -",
        "time": "7:47 PM",
        "minutes": 1187
      },
      {
        "station": "San Antonio - - -",
        "time": "7:51 PM",
        "minutes": 1191
      },
      {
        "station": "Mountain View",
        "time": "7:54 PM",
        "minutes": 1194
      },
      {
        "station": "Sunnyvale",
        "time": "7:58 PM",
        "minutes": 1198
      },
      {
        "station": "Lawrence - - -",
        "time": "8:01 PM",
        "minutes": 1201
      },
      {
        "station": "Santa Clara - - -",
        "time": "8:06 PM",
        "minutes": 1206
      },
      {
        "station": "San Jose Diridon",
        "time": "8:13 PM",
        "minutes": 1213
      },
      {
        "station": "Tamien",
        "time": "8:18 PM",
        "minutes": 1218
      }
    ]
  },
  {
    "trainNum": "158",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "7:25 PM",
        "minutes": 1165
      },
      {
        "station": "22 Street",
        "time": "7:30 PM",
        "minutes": 1170
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "7:34 PM",
        "minutes": 1174
      },
      {
        "station": "S. San Francisco",
        "time": "7:40 PM",
        "minutes": 1180
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "7:43 PM",
        "minutes": 1183
      },
      {
        "station": "Millbrae",
        "time": "7:46 PM",
        "minutes": 1186
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "7:50 PM",
        "minutes": 1190
      },
      {
        "station": "San Mateo",
        "time": "7:53 PM",
        "minutes": 1193
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "7:55 PM",
        "minutes": 1195
      },
      {
        "station": "Hillsdale",
        "time": "7:57 PM",
        "minutes": 1197
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "8:01 PM",
        "minutes": 1201
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "8:03 PM",
        "minutes": 1203
      },
      {
        "station": "Redwood City",
        "time": "8:07 PM",
        "minutes": 1207
      },
      {
        "station": "Menlo Park - - -",
        "time": "8:11 PM",
        "minutes": 1211
      },
      {
        "station": "Palo Alto",
        "time": "8:14 PM",
        "minutes": 1214
      },
      {
        "station": "California Avenue - - -",
        "time": "8:17 PM",
        "minutes": 1217
      },
      {
        "station": "San Antonio - - -",
        "time": "8:21 PM",
        "minutes": 1221
      },
      {
        "station": "Mountain View",
        "time": "8:24 PM",
        "minutes": 1224
      },
      {
        "station": "Sunnyvale",
        "time": "8:28 PM",
        "minutes": 1228
      },
      {
        "station": "Lawrence - - -",
        "time": "8:31 PM",
        "minutes": 1231
      },
      {
        "station": "Santa Clara - - -",
        "time": "8:36 PM",
        "minutes": 1236
      },
      {
        "station": "San Jose Diridon",
        "time": "8:42 PM",
        "minutes": 1242
      }
    ]
  },
  {
    "trainNum": "160",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "7:55 PM",
        "minutes": 1195
      },
      {
        "station": "22 Street",
        "time": "8:00 PM",
        "minutes": 1200
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "8:04 PM",
        "minutes": 1204
      },
      {
        "station": "S. San Francisco",
        "time": "8:10 PM",
        "minutes": 1210
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "8:13 PM",
        "minutes": 1213
      },
      {
        "station": "Millbrae",
        "time": "8:16 PM",
        "minutes": 1216
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "8:20 PM",
        "minutes": 1220
      },
      {
        "station": "San Mateo",
        "time": "8:23 PM",
        "minutes": 1223
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "8:25 PM",
        "minutes": 1225
      },
      {
        "station": "Hillsdale",
        "time": "8:27 PM",
        "minutes": 1227
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "8:31 PM",
        "minutes": 1231
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "8:33 PM",
        "minutes": 1233
      },
      {
        "station": "Redwood City",
        "time": "8:37 PM",
        "minutes": 1237
      },
      {
        "station": "Menlo Park - - -",
        "time": "8:41 PM",
        "minutes": 1241
      },
      {
        "station": "Palo Alto",
        "time": "8:44 PM",
        "minutes": 1244
      },
      {
        "station": "California Avenue - - -",
        "time": "8:47 PM",
        "minutes": 1247
      },
      {
        "station": "San Antonio - - -",
        "time": "8:51 PM",
        "minutes": 1251
      },
      {
        "station": "Mountain View",
        "time": "8:54 PM",
        "minutes": 1254
      },
      {
        "station": "Sunnyvale",
        "time": "8:58 PM",
        "minutes": 1258
      },
      {
        "station": "Lawrence - - -",
        "time": "9:01 PM",
        "minutes": 1261
      },
      {
        "station": "Santa Clara - - -",
        "time": "9:06 PM",
        "minutes": 1266
      },
      {
        "station": "San Jose Diridon",
        "time": "9:13 PM",
        "minutes": 1273
      },
      {
        "station": "Tamien",
        "time": "9:18 PM",
        "minutes": 1278
      }
    ]
  },
  {
    "trainNum": "162",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "8:25 PM",
        "minutes": 1225
      },
      {
        "station": "22 Street",
        "time": "8:30 PM",
        "minutes": 1230
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "8:34 PM",
        "minutes": 1234
      },
      {
        "station": "S. San Francisco",
        "time": "8:40 PM",
        "minutes": 1240
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "8:43 PM",
        "minutes": 1243
      },
      {
        "station": "Millbrae",
        "time": "8:46 PM",
        "minutes": 1246
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "8:50 PM",
        "minutes": 1250
      },
      {
        "station": "San Mateo",
        "time": "8:53 PM",
        "minutes": 1253
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "8:55 PM",
        "minutes": 1255
      },
      {
        "station": "Hillsdale",
        "time": "8:57 PM",
        "minutes": 1257
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "9:01 PM",
        "minutes": 1261
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "9:03 PM",
        "minutes": 1263
      },
      {
        "station": "Redwood City",
        "time": "9:07 PM",
        "minutes": 1267
      },
      {
        "station": "Menlo Park - - -",
        "time": "9:11 PM",
        "minutes": 1271
      },
      {
        "station": "Palo Alto",
        "time": "9:14 PM",
        "minutes": 1274
      },
      {
        "station": "California Avenue - - -",
        "time": "9:17 PM",
        "minutes": 1277
      },
      {
        "station": "San Antonio - - -",
        "time": "9:21 PM",
        "minutes": 1281
      },
      {
        "station": "Mountain View",
        "time": "9:24 PM",
        "minutes": 1284
      },
      {
        "station": "Sunnyvale",
        "time": "9:28 PM",
        "minutes": 1288
      },
      {
        "station": "Lawrence - - -",
        "time": "9:31 PM",
        "minutes": 1291
      },
      {
        "station": "Santa Clara - - -",
        "time": "9:36 PM",
        "minutes": 1296
      },
      {
        "station": "San Jose Diridon",
        "time": "9:42 PM",
        "minutes": 1302
      }
    ]
  },
  {
    "trainNum": "164",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "8:55 PM",
        "minutes": 1255
      },
      {
        "station": "22 Street",
        "time": "9:00 PM",
        "minutes": 1260
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "9:04 PM",
        "minutes": 1264
      },
      {
        "station": "S. San Francisco",
        "time": "9:10 PM",
        "minutes": 1270
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "9:13 PM",
        "minutes": 1273
      },
      {
        "station": "Millbrae",
        "time": "9:16 PM",
        "minutes": 1276
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "9:20 PM",
        "minutes": 1280
      },
      {
        "station": "San Mateo",
        "time": "9:23 PM",
        "minutes": 1283
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "9:25 PM",
        "minutes": 1285
      },
      {
        "station": "Hillsdale",
        "time": "9:27 PM",
        "minutes": 1287
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "9:31 PM",
        "minutes": 1291
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "9:33 PM",
        "minutes": 1293
      },
      {
        "station": "Redwood City",
        "time": "9:37 PM",
        "minutes": 1297
      },
      {
        "station": "Menlo Park - - -",
        "time": "9:41 PM",
        "minutes": 1301
      },
      {
        "station": "Palo Alto",
        "time": "9:44 PM",
        "minutes": 1304
      },
      {
        "station": "California Avenue - - -",
        "time": "9:47 PM",
        "minutes": 1307
      },
      {
        "station": "San Antonio - - -",
        "time": "9:51 PM",
        "minutes": 1311
      },
      {
        "station": "Mountain View",
        "time": "9:54 PM",
        "minutes": 1314
      },
      {
        "station": "Sunnyvale",
        "time": "9:58 PM",
        "minutes": 1318
      },
      {
        "station": "Lawrence - - -",
        "time": "10:01 PM",
        "minutes": 1321
      },
      {
        "station": "Santa Clara - - -",
        "time": "10:06 PM",
        "minutes": 1326
      },
      {
        "station": "San Jose Diridon",
        "time": "10:13 PM",
        "minutes": 1333
      },
      {
        "station": "Tamien",
        "time": "10:18 PM",
        "minutes": 1338
      }
    ]
  },
  {
    "trainNum": "166",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "9:25 PM",
        "minutes": 1285
      },
      {
        "station": "22 Street",
        "time": "9:30 PM",
        "minutes": 1290
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "9:34 PM",
        "minutes": 1294
      },
      {
        "station": "S. San Francisco",
        "time": "9:40 PM",
        "minutes": 1300
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "9:43 PM",
        "minutes": 1303
      },
      {
        "station": "Millbrae",
        "time": "9:46 PM",
        "minutes": 1306
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "9:50 PM",
        "minutes": 1310
      },
      {
        "station": "San Mateo",
        "time": "9:53 PM",
        "minutes": 1313
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "9:55 PM",
        "minutes": 1315
      },
      {
        "station": "Hillsdale",
        "time": "9:57 PM",
        "minutes": 1317
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "10:01 PM",
        "minutes": 1321
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "10:03 PM",
        "minutes": 1323
      },
      {
        "station": "Redwood City",
        "time": "10:07 PM",
        "minutes": 1327
      },
      {
        "station": "Menlo Park - - -",
        "time": "10:11 PM",
        "minutes": 1331
      },
      {
        "station": "Palo Alto",
        "time": "10:14 PM",
        "minutes": 1334
      },
      {
        "station": "California Avenue - - -",
        "time": "10:17 PM",
        "minutes": 1337
      },
      {
        "station": "San Antonio - - -",
        "time": "10:21 PM",
        "minutes": 1341
      },
      {
        "station": "Mountain View",
        "time": "10:24 PM",
        "minutes": 1344
      },
      {
        "station": "Sunnyvale",
        "time": "10:28 PM",
        "minutes": 1348
      },
      {
        "station": "Lawrence - - -",
        "time": "10:31 PM",
        "minutes": 1351
      },
      {
        "station": "Santa Clara - - -",
        "time": "10:36 PM",
        "minutes": 1356
      },
      {
        "station": "San Jose Diridon",
        "time": "10:42 PM",
        "minutes": 1362
      }
    ]
  },
  {
    "trainNum": "168",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "9:55 PM",
        "minutes": 1315
      },
      {
        "station": "22 Street",
        "time": "10:00 PM",
        "minutes": 1320
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "10:04 PM",
        "minutes": 1324
      },
      {
        "station": "S. San Francisco",
        "time": "10:10 PM",
        "minutes": 1330
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "10:13 PM",
        "minutes": 1333
      },
      {
        "station": "Millbrae",
        "time": "10:16 PM",
        "minutes": 1336
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "10:20 PM",
        "minutes": 1340
      },
      {
        "station": "San Mateo",
        "time": "10:23 PM",
        "minutes": 1343
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "10:25 PM",
        "minutes": 1345
      },
      {
        "station": "Hillsdale",
        "time": "10:27 PM",
        "minutes": 1347
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "10:31 PM",
        "minutes": 1351
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "10:33 PM",
        "minutes": 1353
      },
      {
        "station": "Redwood City",
        "time": "10:37 PM",
        "minutes": 1357
      },
      {
        "station": "Menlo Park - - -",
        "time": "10:41 PM",
        "minutes": 1361
      },
      {
        "station": "Palo Alto",
        "time": "10:44 PM",
        "minutes": 1364
      },
      {
        "station": "California Avenue - - -",
        "time": "10:47 PM",
        "minutes": 1367
      },
      {
        "station": "San Antonio - - -",
        "time": "10:51 PM",
        "minutes": 1371
      },
      {
        "station": "Mountain View",
        "time": "10:54 PM",
        "minutes": 1374
      },
      {
        "station": "Sunnyvale",
        "time": "10:58 PM",
        "minutes": 1378
      },
      {
        "station": "Lawrence - - -",
        "time": "11:01 PM",
        "minutes": 1381
      },
      {
        "station": "Santa Clara - - -",
        "time": "11:06 PM",
        "minutes": 1386
      },
      {
        "station": "San Jose Diridon",
        "time": "11:13 PM",
        "minutes": 1393
      },
      {
        "station": "Tamien",
        "time": "11:18 PM",
        "minutes": 1398
      }
    ]
  },
  {
    "trainNum": "170",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "10:25 PM",
        "minutes": 1345
      },
      {
        "station": "22 Street",
        "time": "10:30 PM",
        "minutes": 1350
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "10:34 PM",
        "minutes": 1354
      },
      {
        "station": "S. San Francisco",
        "time": "10:40 PM",
        "minutes": 1360
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "10:43 PM",
        "minutes": 1363
      },
      {
        "station": "Millbrae",
        "time": "10:46 PM",
        "minutes": 1366
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "10:50 PM",
        "minutes": 1370
      },
      {
        "station": "San Mateo",
        "time": "10:53 PM",
        "minutes": 1373
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "10:55 PM",
        "minutes": 1375
      },
      {
        "station": "Hillsdale",
        "time": "10:57 PM",
        "minutes": 1377
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "11:01 PM",
        "minutes": 1381
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "11:03 PM",
        "minutes": 1383
      },
      {
        "station": "Redwood City",
        "time": "11:07 PM",
        "minutes": 1387
      },
      {
        "station": "Menlo Park - - -",
        "time": "11:11 PM",
        "minutes": 1391
      },
      {
        "station": "Palo Alto",
        "time": "11:14 PM",
        "minutes": 1394
      },
      {
        "station": "California Avenue - - -",
        "time": "11:17 PM",
        "minutes": 1397
      },
      {
        "station": "San Antonio - - -",
        "time": "11:21 PM",
        "minutes": 1401
      },
      {
        "station": "Mountain View",
        "time": "11:24 PM",
        "minutes": 1404
      },
      {
        "station": "Sunnyvale",
        "time": "11:28 PM",
        "minutes": 1408
      },
      {
        "station": "Lawrence - - -",
        "time": "11:31 PM",
        "minutes": 1411
      },
      {
        "station": "Santa Clara - - -",
        "time": "11:36 PM",
        "minutes": 1416
      },
      {
        "station": "San Jose Diridon",
        "time": "11:42 PM",
        "minutes": 1422
      }
    ]
  },
  {
    "trainNum": "172",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "10:55 PM",
        "minutes": 1375
      },
      {
        "station": "22 Street",
        "time": "11:00 PM",
        "minutes": 1380
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "11:04 PM",
        "minutes": 1384
      },
      {
        "station": "S. San Francisco",
        "time": "11:10 PM",
        "minutes": 1390
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "11:13 PM",
        "minutes": 1393
      },
      {
        "station": "Millbrae",
        "time": "11:16 PM",
        "minutes": 1396
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "11:20 PM",
        "minutes": 1400
      },
      {
        "station": "San Mateo",
        "time": "11:23 PM",
        "minutes": 1403
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "11:25 PM",
        "minutes": 1405
      },
      {
        "station": "Hillsdale",
        "time": "11:27 PM",
        "minutes": 1407
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "11:31 PM",
        "minutes": 1411
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "11:33 PM",
        "minutes": 1413
      },
      {
        "station": "Redwood City",
        "time": "11:37 PM",
        "minutes": 1417
      },
      {
        "station": "Menlo Park - - -",
        "time": "11:41 PM",
        "minutes": 1421
      },
      {
        "station": "Palo Alto",
        "time": "11:44 PM",
        "minutes": 1424
      },
      {
        "station": "California Avenue - - -",
        "time": "11:47 PM",
        "minutes": 1427
      },
      {
        "station": "San Antonio - - -",
        "time": "11:51 PM",
        "minutes": 1431
      },
      {
        "station": "Mountain View",
        "time": "11:54 PM",
        "minutes": 1434
      },
      {
        "station": "Sunnyvale",
        "time": "11:58 PM",
        "minutes": 1438
      },
      {
        "station": "Lawrence - - -",
        "time": "12:01 AM",
        "minutes": 1441
      },
      {
        "station": "Santa Clara - - -",
        "time": "12:06 AM",
        "minutes": 1446
      },
      {
        "station": "San Jose Diridon",
        "time": "12:13 AM",
        "minutes": 1453
      },
      {
        "station": "Tamien",
        "time": "12:18 AM",
        "minutes": 1458
      }
    ]
  },
  {
    "trainNum": "174",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "11:25 PM",
        "minutes": 1405
      },
      {
        "station": "22 Street",
        "time": "11:30 PM",
        "minutes": 1410
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "11:34 PM",
        "minutes": 1414
      },
      {
        "station": "S. San Francisco",
        "time": "11:40 PM",
        "minutes": 1420
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "11:43 PM",
        "minutes": 1423
      },
      {
        "station": "Millbrae",
        "time": "11:46 PM",
        "minutes": 1426
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "11:50 PM",
        "minutes": 1430
      },
      {
        "station": "San Mateo",
        "time": "11:53 PM",
        "minutes": 1433
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "11:55 PM",
        "minutes": 1435
      },
      {
        "station": "Hillsdale",
        "time": "11:57 PM",
        "minutes": 1437
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "12:01 AM",
        "minutes": 1441
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "12:03 AM",
        "minutes": 1443
      },
      {
        "station": "Redwood City",
        "time": "12:07 AM",
        "minutes": 1447
      },
      {
        "station": "Menlo Park - - -",
        "time": "12:11 AM",
        "minutes": 1451
      },
      {
        "station": "Palo Alto",
        "time": "12:14 AM",
        "minutes": 1454
      },
      {
        "station": "California Avenue - - -",
        "time": "12:17 AM",
        "minutes": 1457
      },
      {
        "station": "San Antonio - - -",
        "time": "12:21 AM",
        "minutes": 1461
      },
      {
        "station": "Mountain View",
        "time": "12:24 AM",
        "minutes": 1464
      },
      {
        "station": "Sunnyvale",
        "time": "12:28 AM",
        "minutes": 1468
      },
      {
        "station": "Lawrence - - -",
        "time": "12:31 AM",
        "minutes": 1471
      },
      {
        "station": "Santa Clara - - -",
        "time": "12:36 AM",
        "minutes": 1476
      },
      {
        "station": "San Jose Diridon",
        "time": "12:42 AM",
        "minutes": 1482
      }
    ]
  },
  {
    "trainNum": "176",
    "type": "Local",
    "direction": "Southbound",
    "stops": [
      {
        "station": "San Francisco",
        "time": "12:05 AM",
        "minutes": 1445
      },
      {
        "station": "22 Street",
        "time": "12:10 AM",
        "minutes": 1450
      },
      {
        "station": "Bayshore - - - - - - -",
        "time": "12:14 AM",
        "minutes": 1454
      },
      {
        "station": "S. San Francisco",
        "time": "12:20 AM",
        "minutes": 1460
      },
      {
        "station": "San Bruno - - - - - - -",
        "time": "12:23 AM",
        "minutes": 1463
      },
      {
        "station": "Millbrae",
        "time": "12:26 AM",
        "minutes": 1466
      },
      {
        "station": "Burlingame - - - - - - -",
        "time": "12:30 AM",
        "minutes": 1470
      },
      {
        "station": "San Mateo",
        "time": "12:33 AM",
        "minutes": 1473
      },
      {
        "station": "Hayward Park - - - - - - -",
        "time": "12:35 AM",
        "minutes": 1475
      },
      {
        "station": "Hillsdale",
        "time": "12:37 AM",
        "minutes": 1477
      },
      {
        "station": "Belmont - - - - - - -",
        "time": "12:41 AM",
        "minutes": 1481
      },
      {
        "station": "San Carlos - - - - - - -",
        "time": "12:43 AM",
        "minutes": 1483
      },
      {
        "station": "Redwood City",
        "time": "12:47 AM",
        "minutes": 1487
      },
      {
        "station": "Menlo Park - - -",
        "time": "12:51 AM",
        "minutes": 1491
      },
      {
        "station": "Palo Alto",
        "time": "12:54 AM",
        "minutes": 1494
      },
      {
        "station": "California Avenue - - -",
        "time": "12:57 AM",
        "minutes": 1497
      },
      {
        "station": "San Antonio - - -",
        "time": "1:01 AM",
        "minutes": 1501
      },
      {
        "station": "Mountain View",
        "time": "1:04 AM",
        "minutes": 1504
      },
      {
        "station": "Sunnyvale",
        "time": "1:08 AM",
        "minutes": 1508
      },
      {
        "station": "Lawrence - - -",
        "time": "1:11 AM",
        "minutes": 1511
      },
      {
        "station": "Santa Clara - - -",
        "time": "1:16 AM",
        "minutes": 1516
      },
      {
        "station": "San Jose Diridon",
        "time": "1:23 AM",
        "minutes": 1523
      },
      {
        "station": "Tamien",
        "time": "1:28 AM",
        "minutes": 1528
      }
    ]
  }
];
