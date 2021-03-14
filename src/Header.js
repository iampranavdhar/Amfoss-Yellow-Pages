import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img className='amfoss-logo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAA6lBMVEVAQED/////wQc9PT03Nzc7OztYWFgyMjLOzs7g4OBHR0eNjY22trb/xQE0OUKnhSI7PUH4+PhTU1Pv7+/19fXn5+dvb2/U1NR/f3+lpaXIyMg4O0FdXV3c3NypqalLS0tnZ2eDg4O9vb2UlJT/yACPj4+bm5tqampDQj7wuAt0dHRPSjtcUjhiVzdsXTR2ZDPksBCfgCi1jyCIcC5JRj3nsRGRdyrMnxr/8tD0uwfWpxTHnBy9lR6efyQwNkNwYDGAazFcTR36z1D/xyr/46H/+OT/7b3/3YT//PKLcyz/1mmJhHMqKipRTTbAVEEYAAAMw0lEQVR4nO1daXfiuBIFZGE2gww47GsSkkA2SEIGQpPMvDfvTWY6///vjAlZcKnkDQtwH9/+knMakK+lWlUqxWIRIkSIECFChAgRIkSIECGCLBBC6ApkjY+/9/1UQcEkkyl2h73s8aC2xuA4Wz1qFmMKDT1Joqix7mmuXkkbJV2Pf0Ivl4xWpd7uNYkaXpImOSXZ67dK38QgykalVu2oYSRJaKaZrZeE1DZh5KrNWLg4Ulrs5QxX7NZIt4cdhe77sd2CxobtStkDvfdpTNW6ShhmkVA1mfLKbo1Su3j40kg71ZQvdu/Qc0eZg2ZIY9W6WGe6otg/OuBJVJo5d3rTDulBUdk3ERxUbW9Pz4RuVA9RoZLYsBUEvXekuge3TmkzmOn7QHrQOaxJVAKcvjX6hySJRK16cVvcoXJ2MAxpsu70tHopneq3j7O9arXaOx20+xXDxgf/QO1AQkaatDftpXS9ne12qGJiFekq738Uj05zqbS9y9MuHoIg0mrF5hmN/qDazKwCePA1M6wnnW6vlrLTTf3m/hmqRzbiV+k1M0Ss8QlZkRzY/UBz34KonIpWmW60k4pzfEDMuHjYFwqkkdyvHCo90btPZYuuox+qJGtpwe+kh/tkSLICCWrV3NN7/yGlK3IU0mf7k0Olhz+UMUh61vAk1qwJXtbeNI0yRPnpdUX1s6yIeobr49KerAU9Q9VfKxvzKzW0U0N/sl7chxySIup+mqbL/9MQcoY6Dbk9xPmE5LBHaW8ZBSio26cPdk6QZDB+6aEv6dsEpceYZGd3bfCVHmKaK8MgtIFaRXwHY8eKhhQRw1xJBvMQSg/58d0qGkIQSakHxG+lnxGGtV0uUjrgH6AfYJJBQRgagax/dyBIBNEPVEiUJG+DKjvzu0mHX6B139Ydh4J4EW010CFsBs/y66cb9PohWU6X6gG/ROHQhBu6FTg/1Fr0dyOFyikcuNyToeGUNjdOdRcMSZPTcG0pS4d0OL80tQtjyPugaUnpPdqFikbPyp9CypmI4BXM11jH0B+sd+RPIZQMiZ4+b4906daejwJbTXkvlR7ByCIl2xbSKhix3JO5aJRjKPDS5OEDKlw0ObmvVIVTKHk8UgRir0tW3Ap06w25A3LGt7/FCyUj5vyZIsi06VJje9IBRl7371uw/GR+7oIhNBU5mUKoZMFobd8/xa7nmvZ078iQm8K0RK0do8CLKfmewOXNrZZIzMbOn4RSUe7Jm0LubaZ8OxbTB5OfyXCad/okZwv9rxpHcG6azzwJyxdmiTU0F4sU+NwteZE9FPiSP6vbuFwkPqHNL50elx5ZCcalBU2k0wcr1NerbFzdaolNhk5zqIB1Iy11wUWCp35WKHuZb/AzUXD6hgpUW0UWQeiH6n62RNj0IgHwY2n/FbiNXJZl6hWwQ5n66fknWKygQX6Jk5eG7ZdIE+hRWVpGBSJY87xU2NWE55dIPFzbiiFnnWQFhSoQQc/arHE1x/glEvMre0UDhFBWFl+x5vHKXo3E8vkWpWeq0sW53RcJCCn6cgiSonWYlrfAhZ1PTwT8TDGc2Hk0FBQDtLZkIhqmayXoLQHERhMhvdUc3tksUtK05kkkxYS0ZyWY8/LlxuWTHb9E4uJOrEph8qkkR8vA4NpLNi3/xlk/OIXzSzFDEMVISo+CjK9+6noUdv5ygavPTYaPYp8NWGC9FgwjgAxYJ66thCl+Myd673Mo/AXl1Orl5zLBULKAdKzm1jhySbBx/+iC3ophQaRKac9qofoyEtyw7iDddTdIXmTdecymAjGkQytBKZswpGiNWtxmtKfO4vfN8BUXQ3pkJViRQjAJrK0bl5c1Cq7ZrRbp7RU6h5CglKAeEnRTE8DexNYdnVdtjuZK6ZmPl7stQReD5C/n4tmaP6AMn7DgcD8EHWWQ3dwKxW9WWL7gtn+M/Cwng1IIQiXjoEUZm+LLcDVPt3f5WH6MOt8XL/wihVpUjpIBO4PpM9tB2PlYaN2125uVLmFP2AvQbvnwl4KKCymFayRjzU/al1Y1RmLrfrK4XL+DkYBhAzKEWwZSDH0sZs1Y2KbQ2ZtY/BKL5QeBxhUaAWsLWPGjDKwE5SS3qXWTQD+2IXgn5vcw/o7e2QuqShOFe/uh5ZQFwO1kG5d+LA6OrDqk8YIqmtkULFIPi8c/YFpU5NKzpY11nz1bXZX8AmVozbPBkqCSnLMiJGklKPB42dVcnHtZnHOuGPY2tIcbC0FQPpqWU4RPMlaCBmrpba37hHfE2BsfbHyYkS/AaMnfnogzQMWDjgWEy7sHIT9TOyKOJnuGikabgDQpASn1nKS8qAoSzHw5AFtO7WL3h2ssomXX1iV9wr2HDEipH8siCBLMXMmKQ2oQdVJMLKebH7rgol6SBCl1WcVAsFDUAATz1065Ce0RjYbOv9+L9sDvxNAjUPog66APHYKBrD59/tLGe/kEmsFmb59vxlSffMQLDXBJ2gYo3OVpb8iCGTyI1cvGHI6xeM/07Nb/+4QlR2H5WF1eNReo6DC+fV52jmz8YZihm4GNy/X8YpVBJAMWjiwdY65RUAn/7TJt1hU4TCG+VZZ/vdBmU7R0GJ5CKbvNV3oH6QJ19llWJdz4w4ArGlZYBcHYoLB8TGLhNlcm/hFZ559tci/8HE7QPfmRoJ5EgccLahJLuZSaVRz0Y7JSLz/cT98KJ2M0+ynamQAqxnVG3Q+4sipzCtnIht8t6tjM7DYD4ZDwnJb/8jEXIBl4TvpUtdn40xZXOHlrsGAPWKHallrTzHU+aP0u2nc3l2LhvtFAtY82dy5RW4N2wZopS667h2VV8T+E/GavpjJhl3ja5dFFLewKsHQl3pJ8cEKF7Qp++4+A33y9DE0Lgs7uxLau4hOwLsBn+ZgH0C48E/ZffHku3j48lsYLHkGN7cub3kGgCo2XZZ+o5w+j/IktUm3xLWRMlMF2ZqhwZ3vkH5KE6YN4/H/Iw9/lN0RsOUZV6QwJHMBYXLMMj7U5fsCFFPH4/+H03YLthdGjL1VKYCQvtZz5e1ju7Olff4AHh7uYBFc02pP9wQllAEeS6sV8PS1/hv63zQnSFiNu6bErXNEIqw5WUJpcswVPtUe+QZtw3E1NOiswZFryLyjB2VQ8DNJsYQcS+A7O+H4z1GavuOZY4ptps1fRHJIif5a9uqNmCPypvvhff3+oFzymM3G+QFXphUDRYN1O0rtr9jDgpONd0Whzcekuu8S90kecISyfjq/OSe2MIMnwy8ecQ23C7VxugI08MOSO8Zmo7bDhCq3yTW3+/Htib7gb1wJVin1Y4RqapXbaQo5yR0/jxj9OX8qPcVWKKhpyamW4myYB38Mr8BB/6sw5/jnHM/sztFKUWCsM5TQjEAPsF5SyP128YMbQUwWJC7RSVK1uMMx5P6OxJSxd/you149AlSaeRtj8qMdfrprUU5EifIUy5ZrrZkcMr6tITO7Rj386o0YvuMd2DfJZSG1UPfSyQH02bXaHDxFbW8NdtLDAhldW1rDcT3qyv+QHz29+JfB/iPrem8f7GaJgsIrujarHTn/sntvFeOLDjy+oNV1v761LLD3LVb0f0IKKZmIX95JMO7eDDiRC+DpBONr0aGbTe9vfIJl98vOH/EaebfbmeAw7jPiqxXh8dpE8DCPWPpu2cNHNIpRYh04nBbc7FOEDW861ixuHw8mhBrueI7XZvxLOf1XxixAhQoRtQbb4d/ggNJbZAod4Z5YFpNhObYO+7NZ+2+LnFpfzfeTPDpohsmfiFfV9c7ADyQRwPZ/L0917ATwl6gc72Yf3C645kR+CO2z57hm//AzGYqLrk9xDZkvd7UG5JuOekTtkfqad4CswvGEv+0heoBy1c/7R7qkHLYErUHUbHDy9CBEiRJCM9S2tPnFwN0RzILGz7BaoNg/k7l0RSCZnf7WuE4zjfVOwB+w07h1yLsgJCkHEg/1DXqP8oQrvkNLOKChwzf4jgiEjCJtL+YHUE57bAr1Y0iP2V7jlBnRoczW5uwnc8+3eTlDOcq20f1Tcl57uCzST3ALFA/fU3kG2wb4fPkKECBEOCizviFCXrLGrgiMc7tI4bNzPTzQHnDzih17CgXv8XKsF9peFHDjYs9MtDIIuXaFBw6kZmfYYcu8s7zCF2luYdYyJ/NSe32PoC9PvbRtWOlwpFQaIDn2uAZsVhxENQU/7FUJtIr7AXkUCeBtqL+YbefzstYuWQCGBoKd9QtC4JIRgWIeAGd7hMJxgnLHQHmx65YQQDFzeo3npbhgOkJu59klR0xb47TyhRmN5uXhYHW2dPRTewh3Hi8Aaby/jwvhl9GvSW4E0GqyBde2KECFChAgRIkSIECFChAgRInjCvwBbGHqFqTBNAAAAAElFTkSuQmCC' alt='Image' />
            </Link>
            <div className='search'>
                <input className='searchInput'
                    type='text' placeholder='Search'/>
            </div>
            <div className='nav'>
                <Link to='amfoss-website-login'>
                <div className='button'>
                    <span className='buttonLineTwo'>SignIn</span>
                </div>
                </Link>
                <Link to='/amfoss-website'>
                <div className='button'>
                    <span className='buttonLineOne'>Amfoss Website</span>
                </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
