import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  services = [
    {
      title: '1. Pamphlet Distribution',
      points: [
        'Modes: Door-to-door, handouts at signals/markets, newspaper inserts',
        'Targeting: Area-specific by pin code, ward, neighbourhood',
        'Benefits: High reach, cost-effective, awareness + conversion',
      ],
    },
    {
      title: '2. Auto Rickshaw Branding',
      points: [
        'Formats: Rear vinyls, side panels, full body wraps',
        'Duration: 10–30 day campaigns',
        'Add-ons: Geo-tracking available',
      ],
    },
    {
      title: '3. Poster & Wall Ads',
      points: [
        'Locations: Tuition centers, markets, grocery shops',
        'Options: Flex/poster sizes, regional languages, creative design',
      ],
    },
    {
      title: '4. Banner & Standee Placement',
      points: [
        'Materials: Flex banners, roll-up standees',
        'Spots: Schools, malls, trade fairs, gyms, clinics',
        'Great for: Product launches, clinic openings, promotions',
      ],
    },
    {
      title: '5. Shop & Vendor Co-Branding',
      points: [
        'Venues: Kirana shops, general stores, pan counters',
        'Tools: Counter stickers, coupons, referral posters',
        'Impact: Trusted vendor association builds credibility',
      ],
    },
    {
      title: '6. Feature in Margin – Society Flyer',
      points: [
        'Method: Flyers in lifts, notice boards, gates',
        'Target: High-density residential societies in Delhi NCR',
        'Use Case: Tuitions, clinics, home delivery brands',
      ],
    },
    {
      title: '7. Feature in Magazine – Societies & Public Spots',
      points: [
        'Reach: 500+ societies and public areas',
        'Formats: Half/full-page ads, classifieds, feature stories',
        'Engagement: Storytelling + high recall',
      ],
    },
  ];

}
